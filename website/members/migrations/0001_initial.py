# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-02-15 15:53
from __future__ import unicode_literals

import django.contrib.auth.models
import django.contrib.auth.validators
import django.core.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0008_alter_user_username_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='Member',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('first_name', models.CharField(blank=True, max_length=30, verbose_name='first name')),
                ('last_name', models.CharField(blank=True, max_length=30, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('birthday', models.DateField(null=True, verbose_name='Birthday')),
                ('person_number_ext', models.CharField(blank=True, help_text='Enter the last four digits of your Swedish person number, given by the Swedish tax authority', max_length=4, null=True, unique_for_date='birthday', validators=[django.core.validators.RegexValidator(message='The person number extension consists of four numbers', regex='^\\d{4}$')], verbose_name='Person number extension')),
                ('phone_number', models.CharField(blank=True, help_text='Enter a phone number so UTN may reach you', max_length=20, null=True, validators=[django.core.validators.RegexValidator(message='Please enter a valid phone number', regex='^\\+?\\d+$')], verbose_name='Phone number')),
                ('registration_year', models.CharField(blank=True, help_text='Enter the year you started studying at the TakNat faculty', max_length=4, null=True, validators=[django.core.validators.RegexValidator(message='Please enter a valid year', regex='^\\d{4}$')], verbose_name='Registration year')),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.Group', verbose_name='groups')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='StudyProgram',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name_en', models.CharField(help_text='Enter the name of the study program', max_length=255, verbose_name='English program name')),
                ('name_sv', models.CharField(help_text='Enter the name of the study program', max_length=255, verbose_name='Swedish program name')),
                ('abbreviation_en', models.CharField(blank=True, help_text='Enter the abbreviation for the study program', max_length=130, null=True, verbose_name='English program abbreviation')),
                ('abbreviation_sv', models.CharField(blank=True, help_text='Enter the abbreviation for the study program', max_length=130, null=True, verbose_name='Swedish program abbreviation')),
                ('degree', models.CharField(choices=[('bachelor', "Bachelor's Degree"), ('master', "Master's Degree"), ('engineer', "Engineer's Degree")], max_length=20, verbose_name='Degree type')),
            ],
        ),
        migrations.AddField(
            model_name='member',
            name='study',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='members.StudyProgram'),
        ),
        migrations.AddField(
            model_name='member',
            name='user_permissions',
            field=models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.Permission', verbose_name='user permissions'),
        ),
    ]
