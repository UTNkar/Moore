import requests
from requests.auth import HTTPBasicAuth
from django.conf import settings


class MockClient:

    def get_user_data(self, unicore_id):
        return {
            'first_name': 'Firstname',
            'last_name': 'Lastname',
            'person_number': '199105050203',
        }

    def is_member(self, ssn):
        if ssn == '196001010101':
            return False
        else:
            return True

    def get_unicore_id(self, ssn):
        return 100000


class ApiClient:

    def request_get(self, path, params=None):
        if params is not None:
            params['orgId'] = settings.UNICORE_ORG_ID

        if settings.UNICORE_ADMIN == '':
            raise requests.exceptions.RequestException(
                "Missing token to make requests to the Unicore API."
            )

        return requests.get(
            settings.UNICORE_URL + "/" + path,
            auth=HTTPBasicAuth('admin', settings.UNICORE_ADMIN),
            params=params,
        )

    def get_user_data(self, unicore_id):
        r = self.request_get('user-by-id' + '/' + str(unicore_id))
        if r.status_code == 200:
            response_json = r.json()

            # person_nr is None for exchange students with T-numbers.
            # This is becuase Unicore stores their personnummer
            # in medlemsnr instead of person_number
            if response_json['Personnr'] is None:
                response_json['Personnr'] = response_json["Medlemsnr"]
            return {
                'first_name': response_json['Fornamn'],
                'last_name': response_json['Efternamn'],
                'person_number': response_json['Personnr']
            }

    def is_member(self, ssn):
        if settings.UNICORE_ADMIN == '':
            return True
        r = self.request_get('is-member/' + ssn)
        if r.status_code == 200:
            return r.json()['Member']
        else:
            return False

    def get_unicore_id(self, ssn):
        parsed_ssn = ssn

        if (not isinstance(parsed_ssn, str)):
            parsed_ssn = ssn[0].strftime('%Y%m%d') + '-' + ssn[1]

        r = self.request_get('user' + '/' + parsed_ssn)

        if r.status_code == 200:
            return r.json()['Id']
        else:
            return False


class UnicoreClient:
    client = None

    @staticmethod
    def __setup():
        if UnicoreClient.client is None:
            if settings.IS_RUNNING_TEST:
                UnicoreClient.client = MockClient()
            else:
                UnicoreClient.client = ApiClient()

    @staticmethod
    def get_user_data(unicore_id):
        UnicoreClient.__setup()
        return UnicoreClient.client.get_user_data(unicore_id)

    @staticmethod
    def is_member(ssn):
        UnicoreClient.__setup()
        return UnicoreClient.client.is_member(ssn)

    @staticmethod
    def get_unicore_id(ssn):
        UnicoreClient.__setup()
        return UnicoreClient.client.get_unicore_id(ssn)
