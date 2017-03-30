from datetime import date, datetime

from django import forms
from django.contrib.auth import forms as auth
from django.core import validators
from django.utils.translation import ugettext_lazy as _
from wagtail.wagtailusers import forms as wagtail

from members.models import StudyProgram, Member


class MemberForm(forms.ModelForm):
    person_number = forms.CharField(
        max_length=13,
        min_length=12,
        help_text=_('Person number using the YYYYMMDD-XXXX format.'),
        validators=[validators.RegexValidator(
            regex=r'^\d{8}\-?\d{4}$',
            message=_('Use the format YYYYMMDD-XXXX for your person number.')
        )],
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'YYYYMMDD-XXXX',
        })
    )

    class Meta:
        model = Member
        fields = ['first_name', 'last_name', 'phone_number',
                  'registration_year', 'study', 'email']
        widgets = {
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control'}),
            'registration_year': forms.TextInput(
                attrs={'class': 'form-control'}
            ),
            'study': forms.Select(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
        }

    def __init__(self, *args, **kwargs):
        instance = kwargs.get('instance', None)

        initial = kwargs.pop('initial', {})
        if instance is not None:
            initial['person_number'] = instance.person_number()

        super(MemberForm, self).__init__(initial=initial, *args, **kwargs)

    def save(self, commit=True):
        person_number = self.cleaned_data['person_number']
        self.instance.birthday = datetime.strptime(
            person_number[:8], "%Y%m%d"
        ).date()
        self.instance.person_number_ext = person_number[-4:]

        email = self.cleaned_data['email']
        if self.initial.get('email', '') != '':
            token = self.instance.add_email_if_not_exists(email)
            if token is None:
                self.instance.set_primary_email(email)
            self.instance.email = self.initial['email']

        return super(MemberForm, self).save(commit=commit)


class RegistrationForm(MemberForm, auth.UserCreationForm):
    class Meta:
        model = Member
        fields = ['username', 'email', 'first_name', 'last_name', 'study',
                  'registration_year', 'phone_number']
        field_classes = {'username': auth.UsernameField}
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control'}),
            'registration_year': forms.Select(
                attrs={'class': 'form-control'},
                choices=[('', '---------')] + [
                    (y.__str__(), y.__str__())
                    for y in
                    range(date.today().year, date.today().year - 50, -1)
                ]
            ),
            'study': forms.Select(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
        }

    def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)
        self.fields['password1'].widget = forms.PasswordInput(
            attrs={'class': 'form-control'}
        )
        self.fields['password2'].widget = forms.PasswordInput(
            attrs={'class': 'form-control'}
        )


class CustomUserEditForm(wagtail.UserEditForm):
    """
    Custom form to edit users from within the wagtail admin interface.
    """
    # TODO: Person number
    birthday = forms.DateField(required=True, label=_('Birthday'))
    person_number_ext = forms.CharField(
        required=True,
        label=_('Person number extension'),
    )
    phone_number = forms.CharField(
        required=False,
        label=_('Phone number'),
    )
    registration_year = forms.CharField(
        required=False,
        label=_('Registration year'),
    )
    study = forms.ModelChoiceField(
        required=False,
        queryset=StudyProgram.objects,
        label=_("Study Program"),
    )
    status = forms.ChoiceField(
        required=False,
        choices=Member.MEMBERSHIP_CHOICES,
        label=_("Membership status"),
    )

    def __init__(self, *args, **kwargs):
        super(CustomUserEditForm, self).__init__(*args, **kwargs)


class CustomUserCreationForm(wagtail.UserCreationForm):
    """
    Custom form to create user from within the Wagtail admin user interface.
    """
    # TODO: Person number
    birthday = forms.DateField(required=True, label=_('Birthday'))
    person_number_ext = forms.CharField(
        required=True,
        label=_('Person number extension'),
    )
    phone_number = forms.CharField(
        required=False,
        label=_('Phone number'),
    )
    registration_year = forms.CharField(
        required=False,
        label=_('Registration year'),
    )
    study = forms.ModelChoiceField(
        required=False,
        queryset=StudyProgram.objects,
        label=_("Study Program"),
    )
    status = forms.ChoiceField(
        required=False,
        choices=Member.MEMBERSHIP_CHOICES,
        label=_("Membership status"),
    )

    def __init__(self, *args, **kwargs):
        super(CustomUserCreationForm, self).__init__(*args, **kwargs)
