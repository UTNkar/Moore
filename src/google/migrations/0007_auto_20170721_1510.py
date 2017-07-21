# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-21 13:10
from __future__ import unicode_literals

from django.db import migrations
import wagtail.wagtailcore.blocks
import wagtail.wagtailcore.fields
import wagtail.wagtailimages.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('google', '0006_auto_20170721_1345'),
    ]

    operations = [
        migrations.AlterField(
            model_name='googleformpage',
            name='results_en',
            field=wagtail.wagtailcore.fields.StreamField((('paragraph', wagtail.wagtailcore.blocks.RichTextBlock(group='Basic', template='blocks/paragraph.html')), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('height', wagtail.wagtailcore.blocks.IntegerBlock(default=400, min_value=1))))), ('heading', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock(required=True)), ('subtitle', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('image_description', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('icons', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('title', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock()))))), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('image_icons', wagtail.wagtailcore.blocks.StructBlock((('description', wagtail.wagtailcore.blocks.RichTextBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('overlay', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('title', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('link', wagtail.wagtailcore.blocks.URLBlock(required=False)), ('button', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('logos', wagtail.wagtailcore.blocks.StructBlock((('logos', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('link', wagtail.wagtailcore.blocks.URLBlock(required=False)))))),))), ('counters', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('counters', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('value', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)))))), ('style', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('light', 'Light'), ('dark', 'Dark')]))))), ('columns', wagtail.wagtailcore.blocks.StructBlock((('columns', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('width', wagtail.wagtailcore.blocks.IntegerBlock(help_text='Width out of 12', max_value=12, min_value=1)), ('content', wagtail.wagtailcore.blocks.StreamBlock((('paragraph', wagtail.wagtailcore.blocks.RichTextBlock(group='Basic', template='blocks/paragraph.html')), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('height', wagtail.wagtailcore.blocks.IntegerBlock(default=400, min_value=1)))))))))))),)))), blank=True),
        ),
        migrations.AlterField(
            model_name='googleformpage',
            name='results_sv',
            field=wagtail.wagtailcore.fields.StreamField((('paragraph', wagtail.wagtailcore.blocks.RichTextBlock(group='Basic', template='blocks/paragraph.html')), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('height', wagtail.wagtailcore.blocks.IntegerBlock(default=400, min_value=1))))), ('heading', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock(required=True)), ('subtitle', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('image_description', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('icons', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('title', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock()))))), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('image_icons', wagtail.wagtailcore.blocks.StructBlock((('description', wagtail.wagtailcore.blocks.RichTextBlock()), ('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('image_alignment', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('left', 'Left'), ('right', 'Right')])), ('hide_on_med', wagtail.wagtailcore.blocks.BooleanBlock(required=False))))), ('overlay', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('title', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)), ('link', wagtail.wagtailcore.blocks.URLBlock(required=False)), ('button', wagtail.wagtailcore.blocks.CharBlock(required=False))))), ('logos', wagtail.wagtailcore.blocks.StructBlock((('logos', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('link', wagtail.wagtailcore.blocks.URLBlock(required=False)))))),))), ('counters', wagtail.wagtailcore.blocks.StructBlock((('title', wagtail.wagtailcore.blocks.CharBlock()), ('counters', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('icon', wagtail.wagtailcore.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('value', wagtail.wagtailcore.blocks.CharBlock()), ('description', wagtail.wagtailcore.blocks.CharBlock(required=False)))))), ('style', wagtail.wagtailcore.blocks.ChoiceBlock(choices=[('light', 'Light'), ('dark', 'Dark')]))))), ('columns', wagtail.wagtailcore.blocks.StructBlock((('columns', wagtail.wagtailcore.blocks.ListBlock(wagtail.wagtailcore.blocks.StructBlock((('width', wagtail.wagtailcore.blocks.IntegerBlock(help_text='Width out of 12', max_value=12, min_value=1)), ('content', wagtail.wagtailcore.blocks.StreamBlock((('paragraph', wagtail.wagtailcore.blocks.RichTextBlock(group='Basic', template='blocks/paragraph.html')), ('image', wagtail.wagtailcore.blocks.StructBlock((('image', wagtail.wagtailimages.blocks.ImageChooserBlock()), ('height', wagtail.wagtailcore.blocks.IntegerBlock(default=400, min_value=1)))))))))))),)))), blank=True),
        ),
    ]
