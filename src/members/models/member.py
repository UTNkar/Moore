from datetime import date, timedelta
from django.apps import apps
from django.contrib.auth.models import AbstractUser, UserManager
from django.core import validators
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _
from simple_email_confirmation.models import SimpleEmailConfirmationUserMixin
from utils.melos_client import MelosClient
from utils.validators import SSNValidator
from phonenumbers import format_number, PhoneNumberFormat, parse


def status_changed_default():
    return timezone.now() - timedelta(days=2)


class CaseInsensitiveUsernameUserManager(UserManager):
    # Search username with insensitive case
    def get_by_natural_key(self, username):
        case_insensitive_username_field = '{}__iexact' \
            .format(self.model.USERNAME_FIELD)
        return self.get(**{case_insensitive_username_field: username})


class MelosUserManager(CaseInsensitiveUsernameUserManager):
    # Search Member through Melos if username is SSN
    def get_by_natural_key(self, username):
        member = None
        try:
            member = super().get_by_natural_key(username)
        except Exception as e:
            member, _ = Member.find_by_ssn(username)

            if member is None:
                raise e

        return member

    def create_superuser(
        self, username, password,
        email, phone_number, melos_id
    ):
        """Creates a new superuser with a melos id."""
        superuser = Member.objects.create(
            username=username,
            melos_id=melos_id,
            email=email,
            phone_number=phone_number,
            is_superuser=True,
            is_staff=True
        )
        superuser.set_password(password)
        superuser.save()


class Member(SimpleEmailConfirmationUserMixin, AbstractUser):
    """This class describes a member"""

    # ---- AbstractUser overrides ---

    objects = MelosUserManager()

    EMAIL_FIELD = 'email'
    USERNAME_FIELD = 'username'

    REQUIRED_FIELDS = [
        AbstractUser.get_email_field_name(),
        "phone_number",
        "melos_id"
    ]

    first_name = models.CharField(
        verbose_name=_('first name'),
        max_length=30,
        blank=True,
        null=True
    )

    last_name = models.CharField(
        verbose_name=_('last name'),
        max_length=150,
        blank=True,
        null=True
    )

    # ---- Personal information ------

    birthday = models.DateField(
        verbose_name=_('Birthday'),
        blank=True,
        null=True,
        editable=False
    )

    person_number_ext = models.CharField(
        max_length=4,
        verbose_name=_('Person number extension'),
        help_text=_('Enter the last four digits of your Swedish person '
                    'number, given by the Swedish tax authority'),
        validators=[validators.RegexValidator(
            regex=r'^\d{4}$',
            message=_('The person number extension consists of four numbers'),
        )],
        unique_for_date="birthday",
        blank=True,
        null=True
    )

    # ---- Membership information ------

    MEMBERSHIP_CHOICES = (
        ('unknown', _('Unknown')),
        ('nonmember', _('Nonmember')),
        ('member', _('Member')),
        ('alumnus', _('Alumnus')),
    )

    status = models.CharField(
        max_length=20,
        choices=MEMBERSHIP_CHOICES,
        verbose_name=_('Membership status'),
        blank=False,
        default='unknown'
    )

    status_changed = models.DateTimeField(
        default=status_changed_default,
        null=False,
    )

    # ---- Contact information ------

    phone_number = models.CharField(
        max_length=20,
        verbose_name=_('Phone number'),
        help_text=_('Enter a phone number so UTN may reach you'),
    )

    email = models.EmailField(
        max_length=255,
        verbose_name=_('email'),
        help_text=_('Enter an email address so UTN may reach you')
    )

    # ---- University information ------

    registration_year = models.CharField(
        max_length=4,
        verbose_name=_('Registration year'),
        help_text=_('Enter the year you started studying at the TakNat '
                    'faculty'),
        validators=[validators.RegexValidator(
            regex=r'^\d{4}$',
            message=_('Please enter a valid year')
        )],
        blank=True,
    )

    study = models.ForeignKey(
        'StudyProgram',
        verbose_name=_('Study program'),
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    section = models.ForeignKey(
        'Section',
        verbose_name=_('Member of section'),
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
    )

    # ---- Melos ------

    melos_id = models.IntegerField(
        blank=True,
        editable=False,
        null=True,
        unique=True,
    )

    melos_user_data = None

    def __str__(self) -> str:
        return self.username

    @property
    def teams(self):
        Team = apps.get_model('involvement', 'Team')
        return Team.objects.filter(
            roles__positions__term_from__lte=date.today(),
            roles__positions__term_to__gte=date.today(),
            roles__positions__applications__applicant=self,
            roles__positions__applications__status='appointed',
        )

    @property
    def roles(self):
        Role = apps.get_model('involvement', 'Role')
        return Role.objects.filter(
            positions__term_from__lte=date.today(),
            positions__term_to__gte=date.today(),
            positions__applications__applicant=self,
            positions__applications__status='appointed',
        )

    @property
    def get_status(self):
        self.update_status()
        return self.status

    @property
    def get_first_name(self):
        data = self.get_melos_user_data()
        return '' if data is None else data['first_name']

    @property
    def get_last_name(self):
        data = self.get_melos_user_data()
        return '' if data is None else data['last_name']

    @property
    def get_full_name(self):
        return '{} {}'.format(self.get_first_name, self.get_last_name)

    @property
    def get_phone_formatted(self):
        try:
            parsed_number = parse(self.phone_number, "SE")
            number_format = \
                PhoneNumberFormat.NATIONAL \
                if parsed_number.country_code == 46 \
                else PhoneNumberFormat.INTERNATIONAL

            return format_number(
                parsed_number,
                number_format
            )
        except Exception:
            return self.phone_number

    @property
    def get_ssn(self):
        data = self.get_melos_user_data()
        return None if data is None else data['person_number']

    @property
    def get_email(self):
        if not self.email:
            data = self.get_melos_user_data()
            if data | data['email']:
                self.email = data['email']
                self.save()

        return self.email

    def person_number(self) -> str:
        return self.get_ssn

    def update_status(self, data=None, save=True):
        if data is None:
            # Prevent updating this value to often
            if timezone.now() - self.status_changed < timedelta(days=1):
                return

            melos_user_data = self.get_melos_user_data()
            if melos_user_data is None:
                return
            is_member = MelosClient.is_member(melos_user_data['person_number'])
            data = "member" if is_member else "nonmember"

        if data == 'member':
            self.status = 'member'
        elif data == 'nonmember':
            if self.status not in ['member', 'alumnus']:
                self.status = 'nonmember'
            else:
                self.status = 'alumnus'

        self.status_changed = timezone.now()

        if save:
            self.save()

    def remove_old_email(self):
        for email in self.get_unconfirmed_emails() or []:
            self.remove_email(email)
        for email in self.get_confirmed_emails():
            if email != self.email:
                self.remove_email(email)

    def get_status_text(self, status):
        status = _('Member') if status == 'member' else _('Nonmember')
        return status

    def sync_user_groups(self):
        current_groups = self.groups.all()
        wanted_groups = list(map(lambda role: role.group, self.roles.filter(
            positions__applications__removed=False
        ).all()))

        # Remove unavailable groups
        for group in current_groups:
            if group not in wanted_groups:
                group.user_set.remove(self)

        # Add missing groups
        for group in wanted_groups:
            if (group not in current_groups):
                group.user_set.add(self)

    def get_melos_user_data(self):
        if self.melos_user_data is None:
            self.melos_user_data = MelosClient.get_user_data(self.melos_id)
        return self.melos_user_data

    @staticmethod
    def find_by_melos_id(melos_id):
        if melos_id:
            return Member.objects.filter(melos_id=int(melos_id)).first()
        return None

    @staticmethod
    def find_by_ssn(ssn):
        try:
            ssn = ssn.strip()
            SSNValidator()(ssn)
            melos_id = MelosClient.get_melos_id(ssn)
            return Member.find_by_melos_id(melos_id), melos_id
        except Exception:
            pass

        return None, None
