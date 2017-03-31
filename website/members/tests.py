from django.core import mail
from django.test import TestCase
from datetime import datetime

from django.urls import reverse

from members.models import Member, StudyProgram


class MemberTest(TestCase):
    """
    Unit tests for the Member Model
    """

    def setUp(self):
        self.member = Member.objects.create(username='moore')
        self.assertEqual(1, Member.objects.count())

    def test_print_person_number(self):
        self.member.birthday = datetime.strptime('03/01/1929', '%d/%m/%Y')
        self.member.person_number_ext = '1234'
        self.assertEqual(
            '19290103-1234', self.member.person_number(),
            'Person numbers are printed as \'(year)(month)(day)-(ext)\'.'
        )

    def test_empty_person_number(self):
        self.assertEqual(
            '', self.member.person_number(),
            'A empty string is returned if no person number data is available'
        )

    def test_study_deletion(self):
        study = StudyProgram.objects.create(name_en='subject')
        self.member.study = study
        self.member.save()
        study.delete()
        self.member.refresh_from_db()
        self.assertEqual(
            None, self.member.study,
            'Deleting a study program resets the study for the members'
        )


class ProfileTest(TestCase):
    """
    Tests for the profile page and subsequent form.
    """

    def setUp(self):
        # Create test objects
        self.study = StudyProgram.objects.create(
            name_en='Chemistry',
            name_sv='Kemi',
            degree='bachelor',
        )
        self.member = Member.objects.create(
            username='moore',
            first_name='Gordon',
            last_name='Moore',
            email='g.moore@localhost',
            birthday=datetime.strptime('03/01/1929', '%d/%m/%Y'),
            person_number_ext='1234',
            phone_number='+461234567890',
            registration_year='1946',
            study=self.study,
        )
        self.member.set_password('Intel1968')
        self.member.save()

        self.client.login(username='moore', password='Intel1968')

    def test_login_redirect(self):
        self.client.logout()
        response = self.client.get(reverse('profile'))

        self.assertEqual(response.status_code, 302)
        self.assertEqual(response.url,
                         reverse('login') + '?next=' + reverse('profile'))

    def test_initial_data(self):
        response = self.client.get(reverse('profile'))

        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.member.first_name,
                            msg_prefix='Response contains first name')
        self.assertContains(response, self.member.last_name,
                            msg_prefix='Response contains last name')
        self.assertContains(response, self.member.person_number(),
                            msg_prefix='Response contains person number')
        self.assertContains(response, self.member.phone_number,
                            msg_prefix='Response contains phone number')
        self.assertContains(response, self.member.email,
                            msg_prefix='Response contains e-mail address')
        self.assertContains(response,
                            '<option value="'
                            + self.member.study_id.__str__()
                            + '" selected="selected">')
        self.assertContains(response, self.member.registration_year,
                            msg_prefix='Response contains registration year')

    def test_change_contact(self):
        data = {
            'first_name': 'Flash',
            'last_name': 'Gordon',
            'person_number': '19340107-9876',
            'phone_number': '+31612345678',

        }
        response = self.client.post(reverse('profile'), data)

        # No errors occurred in the change
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {})

        # The contact information has been changed
        member = Member.objects.get(username='moore')
        self.assertEqual(member.first_name, data['first_name'])
        self.assertEqual(member.last_name, data['last_name'])
        self.assertEqual(member.person_number(), data['person_number'])
        self.assertEqual(member.phone_number, data['phone_number'])

    def test_change_study(self):
        new_study = StudyProgram.objects.create(
            name_en='Superhero',
            name_sv='Superhjälte',
            degree='master',
        )
        data = {
            'study': new_study.id.__str__(),
            'registration_year': '1980',
            'person_number': self.member.person_number(),
        }
        response = self.client.post(reverse('profile'), data)

        # No errors occurred in the change
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {})

        # The contact information has been changed
        member = Member.objects.get(username='moore')
        self.assertEqual(member.study, new_study)
        self.assertEqual(member.registration_year, data['registration_year'])

    def test_change_email(self):
        new_email = 'f.gordon@localhost'
        data = {
            'email': 'f.gordon@localhost',
            'person_number': self.member.person_number(),
        }
        response = self.client.post(reverse('profile'), data)

        # No errors occurred in the change
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context['form'].errors, {})

        # An unconfirmed e-mail address has been added
        self.assertContains(
            response,
            'Your newly set e-mail address has not yet been confirmed',
        )
        member = Member.objects.get(username='moore')
        self.assertIn(new_email, member.get_unconfirmed_emails())

        self.assertEqual(len(mail.outbox), 2)
        self.assertEqual(mail.outbox[1].to, [new_email])
        self.assertIn(
            self.member.get_confirmation_key(new_email), mail.outbox[1].body
        )


class EmailConfirmationTest(TestCase):
    """Tests for the sending of confirmations of new e-mail addresses"""

    def setUp(self):
        # Create test objects
        self.member = Member.objects.create(
            username='moore',
            email='g.moore@localhost',
        )

    def test_send_on_creation(self):
        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].to, [self.member.email])
        self.assertIn(
            self.member.get_confirmation_key(), mail.outbox[0].body
        )

    def test_send_on_change(self):
        new_email = 'gordon@localhost'
        token = self.member.add_email_if_not_exists(new_email)

        self.assertEqual(len(mail.outbox), 2)
        self.assertEqual(mail.outbox[1].to, [new_email])
        self.assertIn(
            token, mail.outbox[1].body
        )

    def test_confirm(self):
        self.member.set_password('Intel1968')
        self.member.save()
        self.client.login(username='moore', password='Intel1968')

        response = self.client.get(reverse('email_change_confirm', kwargs={
            'token': self.member.get_confirmation_key()
        }), follow=True)

        self.assertContains(
            response, 'Your e-mail address has been confirmed.',
        )
        self.assertIn(self.member.email, self.member.get_confirmed_emails())

    def test_invalid_confirm(self):
        self.member.set_password('Intel1968')
        self.member.save()
        self.client.login(username='moore', password='Intel1968')

        response = self.client.get(reverse('email_change_confirm', kwargs={
            'token': 'trololololol'
        }), follow=True)

        self.assertContains(
            response, 'The provided confirmation token was invalid.',
        )
        self.assertNotIn(self.member.email, self.member.get_confirmed_emails())
