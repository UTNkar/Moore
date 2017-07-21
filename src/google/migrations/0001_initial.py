# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-16 11:59
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtailimages.blocks


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wagtailcore', '0033_remove_golive_expiry_help_text'),
    ]

    operations = [
        migrations.CreateModel(
            name='GoogleFormIndex',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('title_sv', models.CharField(max_length=255)),
                ('description_en', wagtail.wagtailcore.fields.RichTextField(blank=True, verbose_name='English description')),
                ('description_sv', wagtail.wagtailcore.fields.RichTextField(blank=True, verbose_name='Swedish description')),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
        migrations.CreateModel(
            name='GoogleFormPage',
            fields=[
                ('page_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to='wagtailcore.Page')),
                ('title_sv', models.CharField(max_length=255)),
                ('form_en', wagtail.wagtailcore.fields.StreamField((('google_form', wagtail.wagtailcore.blocks.StructBlock((('form_id', wagtail.wagtailcore.blocks.CharBlock()), ('height', wagtail.wagtailcore.blocks.IntegerBlock())))),))),
                ('form_sv', wagtail.wagtailcore.fields.StreamField((('google_form', wagtail.wagtailcore.blocks.StructBlock((('form_id', wagtail.wagtailcore.blocks.CharBlock()), ('height', wagtail.wagtailcore.blocks.IntegerBlock())))),))),
                ('deadline', models.DateField(verbose_name='Form deadline')),
                ('results_en', wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock(required=True)), ('subtitle', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('paragraph', wagtail.wagtailcore.blocks.RichTextBlock()), ('image_description', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('icons', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('title', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock()))))), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('image_icons', wagtail.wagtailcore.blocks.StructBlock((('description', wagtail.wagtailcore.blocks.RichTextBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('overlay', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('title', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('link', wagtail.wagtailcore.blocks.URLBlock(required=False)), ('button', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('logos', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailimages.blocks.ImageChooserBlock(), icon='fa-pied-piper', label='Logos', template='blocks/logos.html')), ('counters', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('counters', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('value', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)))))), ('style', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('light', 'Light'), ('dark', 'Dark')]))))), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock(template='blocks/image.html'))), blank=True)),
                ('results_sv', wagtail.wagtailcore.fields.StreamField((('heading', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock(required=True)), ('subtitle', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('paragraph', wagtail.wagtailcore.blocks.RichTextBlock()), ('image_description', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('icons', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('title', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock()))))), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('image_icons', wagtail.wagtailcore.blocks.StructBlock((('description', wagtail.wagtailcore.blocks.RichTextBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('overlay', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('title', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('link', wagtail.wagtailcore.blocks.URLBlock(required=False)), ('button', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('logos', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailimages.blocks.ImageChooserBlock(), icon='fa-pied-piper', label='Logos', template='blocks/logos.html')), ('counters', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('counters', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('value', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)))))), ('style', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('light', 'Light'), ('dark', 'Dark')]))))), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock(template='blocks/image.html'))), blank=True)),
            ],
            options={
                'abstract': False,
            },
            bases=('wagtailcore.page',),
        ),
    ]