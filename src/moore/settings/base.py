"""
Django settings for Project Moore.

This file contains the shared settings. See development.py
and production.py for environment specific settings.

For more information on this file, see
https://docs.djangoproject.com/en/1.10/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.10/ref/settings/
"""

from __future__ import absolute_import, unicode_literals

from django.conf.global_settings import LOGIN_URL
from django.utils.translation import gettext_lazy as _
from decouple import config, UndefinedValueError
import sys
# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BASE_DIR = os.path.dirname(PROJECT_DIR)

# Application definition

INSTALLED_APPS = [
    'blocks',
    'branding',
    'events',
    'google',
    'home',
    'involvement',
    'instagram',
    'materialize',
    'members',
    'news',
    'search',
    'moore',  # include for templatetags

    'wagtail.contrib.forms',
    'wagtail.contrib.redirects',
    'wagtail.embeds',
    'wagtail.sites',
    'wagtail.users',
    'wagtail.snippets',
    'wagtail.documents',
    'wagtail.images',
    'wagtail.search',
    'wagtail.admin',
    'wagtail.core',
    'wagtail.contrib.settings',
    'wagtail.contrib.modeladmin',
    'wagtail.contrib.routable_page',
    'wagtail.search.backends.database',
    'wagtail.api.v2',
    'wagtailmedia',

    'compressor',
    'kronos',
    'modelcluster',
    'rules.apps.AutodiscoverRulesConfig',
    'simple_email_confirmation',
    'taggit',
    'wagtailfontawesome',
    'rest_framework',
    'wagtailcaptcha',
    'captcha',
    'jsonschemaform',
    'django_select2',  # Custom select2 widget
    'django_hosts',  # Subdomain for admin site

    'django.contrib.admin',  # Used for wagtail admin filters
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

MIDDLEWARE = [
    # Make sure the HTTP_HOST is set correctly – djang-hosts uses get_host()
    # https://docs.djangoproject.com/en/5.0/ref/request-response/#django.http.HttpRequest.get_host
    'admin.middleware.TrustedHostMiddleware',
    # Subdomain for admin site. Needed by django_hosts
    'django_hosts.middleware.HostsRequestMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.middleware.locale.LocaleMiddleware',

    'wagtail.contrib.redirects.middleware.RedirectMiddleware',
    # Redirect GET html at path "/admin/*" admin subdomain
    'admin.middleware.RedirectAdminMiddleware',
    # Subdomain for admin site. Needed by django_hosts
    'django_hosts.middleware.HostsResponseMiddleware',
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': config('DJANGO_DB_NAME', default='moore'),
        'USER': config('DJANGO_DB_USER', default='moore'),
        'PASSWORD': config('DJANGO_DB_PASS', default='moore'),
        'HOST': config('DJANGO_DB_HOST', default='127.0.0.1'),
        'PORT':  config('DJANGO_DB_PORT', default='5432'),
    }
}

ROOT_URLCONF = 'moore.urls'
# Needed for django hosts, enables us to publish wagtail admin on subdomain.
ROOT_HOSTCONF = 'moore.settings.hosts'
DEFAULT_HOST = 'default'


TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(PROJECT_DIR, 'templates'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'moore.wsgi.application'

# Internationalization
# https://docs.djangoproject.com/en/1.10/topics/i18n/

LANGUAGE_CODE = 'en'

TIME_ZONE = 'Europe/Stockholm'

USE_I18N = True

USE_L10N = True

USE_TZ = True

WAGTAIL_CONTENT_LANGUAGES = LANGUAGES = [
    ('en', _('English')),
    ('sv', _('Swedish'))
]

LOCALE_PATHS = ['locale']

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.10/howto/static-files/

STATICFILES_FINDERS = [
    'django.contrib.staticfiles.finders.FileSystemFinder',
    'django.contrib.staticfiles.finders.AppDirectoriesFinder',
    # Compressor
    'compressor.finders.CompressorFinder',
]

STATICFILES_DIRS = [
    os.path.join(PROJECT_DIR, 'static'),
]

STATIC_ROOT = os.path.join(BASE_DIR, 'static')
STATIC_URL = '/static/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media')
MEDIA_URL = '/media/'

# Compressor
# https://django-compressor.readthedocs.io/en/latest/settings/

COMPRESS_PRECOMPILERS = (
    ('text/x-scss', 'django_libsass.SassCompiler'),
)

COMPRESS_FILTERS = {
    "css": [
        'compressor.filters.css_default.CssAbsoluteFilter',
        'compressor.filters.cssmin.rCSSMinFilter'
    ]
}

# Authentication settings

AUTH_USER_MODEL = 'members.Member'

AUTHENTICATION_BACKENDS = (
    'rules.permissions.ObjectPermissionBackend',
    'django.contrib.auth.backends.ModelBackend',
)

# Password validation
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation'
                '.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation'
                '.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation'
                '.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation'
                '.NumericPasswordValidator',
    },
]

# Password hashers
# https://docs.djangoproject.com/en/1.10/ref/settings/#auth-password-validators

PASSWORD_HASHERS = [
    'django.contrib.auth.hashers.Argon2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2PasswordHasher',
    'django.contrib.auth.hashers.PBKDF2SHA1PasswordHasher',
    'django.contrib.auth.hashers.BCryptSHA256PasswordHasher',
    'django.contrib.auth.hashers.BCryptPasswordHasher',
]

# Email address used to send errors.
# https://docs.djangoproject.com/en/1.10/ref/settings/#server-email
SERVER_EMAIL = 'moore@utn.se'

# Wagtail settings

WAGTAIL_SITE_NAME = "Uppsala teknolog- och naturvetarkår"
WAGTAIL_FRONTEND_LOGIN_URL = LOGIN_URL

WAGTAIL_USER_EDIT_FORM = 'members.forms.CustomUserEditForm'
WAGTAIL_USER_CREATION_FORM = 'members.forms.CustomUserCreationForm'
WAGTAIL_USER_CUSTOM_FIELDS = ['registration_year', 'study',
                              'status', 'section']

WAGTAILSEARCH_BACKENDS = {
    'default': {
        'BACKEND': 'wagtail.search.backends.database',
    }
}

IS_RUNNING_TEST = 'test' in sys.argv

INSTAGRAM_APP_ID = config('INSTAGRAM_APP_ID', default='')
INSTAGRAM_APP_SECRET = config('INSTAGRAM_APP_SECRET', default='')
INSTAGRAM_REDIRECT_URL = config('INSTAGRAM_REDIRECT_URL', default='')

try:
    UNICORE_ADMIN = config('UNICORE_ADMIN')
except UndefinedValueError:
    # This allows the tests to be runned without having to have UNICORE_URL and
    # UNICORE_ADMIN since they don't use the UNICORE API. But this also raises
    # the error if for example a developer tries to start the server but has
    # not filled in the variables in their .env. I.e. The variables are still
    # required, except for when the tests are runned.
    if not IS_RUNNING_TEST:
        print(UndefinedValueError(
            "You are missing UNICORE_ADMIN in your .env file, which means "
            + "user data cannot be retrieved from Unicore. All users will "
            + "be assumed to be members of UTN (is_member returns True)."
        ))

UNICORE_ADMIN = config('UNICORE_ADMIN', default='')
UNICORE_ORG_ID = config('UNICORE_ORG_ID', default='')
UNICORE_URL = config(
    'UNICORE_URL',
    default='https://unicorecustomapi.mecenat.com/utn'
)

# Google API
GOOGLE_API_KEY = config('GOOGLE_API_KEY', default='')

REST_FRAMEWORK = {
    'DEFAULT_RENDERER_CLASSES': [
        'rest_framework.renderers.JSONRenderer',
    ]
}

SILENCED_SYSTEM_CHECKS = ['captcha.recaptcha_test_key_error']

DEFAULT_AUTO_FIELD = 'django.db.models.AutoField'

JSONSCHEMAFORM = {
    'options': {
        'theme': 'bootstrap3',
        'disable_edit_json': True,
        'disable_collapse': True,
        'disable_properties': True,
        'no_additional_properties': True,
        'max_depth': 1,
    }
}
