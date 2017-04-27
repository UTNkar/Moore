from datetime import datetime

from django import forms
from django.contrib.auth import forms as auth
from django.core import validators
from django.core.exceptions import ValidationError
from django.utils.encoding import force_text
from django.utils.translation import ugettext_lazy as _
from wagtail.wagtailusers import forms as wagtail

from members.models import StudyProgram, Member, Section


class PersonNumberField(forms.Field):
    def __init__(self, *args, **kwargs):
        super(PersonNumberField, self).__init__(*args, **kwargs)

    def to_python(self, value):
        if value in self.empty_values:
            return None, ''
        value = force_text(value)
        validators.RegexValidator(
            regex=r'^\d{8}\-?(T|\d)\d{3}$',
            message=_('Use the format YYYYMMDD-XXXX for your person number.')
        )(value)
        try:
            date = datetime.strptime(value[:8], '%Y%m%d').date()
        except ValueError:
            date = value[:4] + '-' + value[4:6] \
                   + '-' + value[6:8]
            raise ValidationError(
                _('%(date)s is an invalid date'),
                params={'date': date}
            )
        number = value[-4:]
        return date, number

    def widget_attrs(self, widget):
        attrs = super(PersonNumberField, self).widget_attrs(widget)
        attrs['class'] = attrs.get('class', '') + ' person_number'
        attrs['placeholder'] = 'YYYYMMDD-XXXX'
        return attrs


class MemberForm(forms.ModelForm):
    person_number = PersonNumberField(
        label=_('Person number'),
        help_text=_('Person number using the YYYYMMDD-XXXX format.'),
    )

    class Meta:
        model = Member
        fields = ['first_name', 'last_name', 'phone_number',
                  'registration_year', 'study', 'section', 'email']

    def __init__(self, *args, **kwargs):
        instance = kwargs.get('instance', None)
        initial = kwargs.pop('initial', {})
        if instance is not None:
            initial['person_number'] = instance.person_number()

        super(MemberForm, self).__init__(initial=initial, *args, **kwargs)
        self.fields['first_name'].required = True
        self.fields['last_name'].required = True

    def save(self, commit=True):
        person_number = self.cleaned_data['person_number']
        self.instance.birthday = person_number[0]
        self.instance.person_number_ext = person_number[1]

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
        fields = ['username', 'email', 'first_name', 'last_name',
                  'phone_number']
        field_classes = {'username': auth.UsernameField}
        widgets = {
            'username': forms.TextInput(attrs={'class': 'form-control'}),
            'first_name': forms.TextInput(attrs={'class': 'form-control'}),
            'last_name': forms.TextInput(attrs={'class': 'form-control'}),
            'phone_number': forms.TextInput(attrs={'class': 'form-control'}),
            'email': forms.EmailInput(attrs={'class': 'form-control'}),
        }

    def __init__(self, *args, **kwargs):
        super(RegistrationForm, self).__init__(*args, **kwargs)
        self.fields['first_name'].required = True
        self.fields['last_name'].required = True
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
    person_number = PersonNumberField(
        label=_('Person number'),
        help_text=_('Person number using the YYYYMMDD-XXXX format.'),
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
    section = forms.ModelChoiceField(
        required=False,
        queryset=Section.objects,
        label=_("Section"),
    )
    status = forms.ChoiceField(
        choices=Member.MEMBERSHIP_CHOICES,
        label=_("Membership status"),
    )

    def __init__(self, *args, **kwargs):
        instance = kwargs.get('instance', None)

        initial = kwargs.pop('initial', {})
        if instance is not None:
            initial['person_number'] = instance.person_number()

        super(CustomUserEditForm, self).__init__(
            initial=initial, *args, **kwargs
        )

    def save(self, commit=True):
        person_number = self.cleaned_data['person_number']
        self.instance.birthday = person_number[0]
        self.instance.person_number_ext = person_number[1]

        return super(CustomUserEditForm, self).save(commit=commit)


class CustomUserCreationForm(wagtail.UserCreationForm):
    """
    Custom form to create user from within the Wagtail admin user interface.
    """
    person_number = PersonNumberField(
        label=_('Person number'),
        help_text=_('Person number using the YYYYMMDD-XXXX format.'),
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
        label=_("Study program"),
    )
    section = forms.ModelChoiceField(
        required=False,
        queryset=Section.objects,
        label=_("Section"),
    )
    status = forms.ChoiceField(
        required=False,
        choices=Member.MEMBERSHIP_CHOICES,
        label=_("Membership status"),
    )

    def __init__(self, *args, **kwargs):
        instance = kwargs.get('instance', None)

        initial = kwargs.pop('initial', {})
        if instance is not None:
            initial['person_number'] = instance.person_number()

        super(CustomUserCreationForm, self).__init__(
            initial=initial, *args, **kwargs
        )

    def save(self, commit=True):
        person_number = self.cleaned_data['person_number']
        self.instance.birthday = person_number[0]
        self.instance.person_number_ext = person_number[1]

        return super(CustomUserCreationForm, self).save(commit=commit)
