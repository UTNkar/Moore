# Generated by Django 3.1.7 on 2021-05-12 07:56

import blocks.models
from django.db import migrations
import instagram.blocks.instagram_feed_chooser_block
import involvement.blocks.contact_card_block
import wagtail.core.blocks
import wagtail.core.fields
import wagtail.images.blocks


class Migration(migrations.Migration):

    dependencies = [
        ('google', '0028_auto_20210420_1629'),
    ]

    operations = [
        migrations.AlterField(
            model_name='googleformpage',
            name='results_en',
            field=wagtail.core.fields.StreamField([('section', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.ChoiceBlock(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large')], help_text='Include padding for this section', required=False)), ('full_width', wagtail.core.blocks.BooleanBlock(help_text='Expand this section to full page width', required=False)), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock()), ('Accordion', wagtail.core.blocks.StructBlock([('rows', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('header', wagtail.core.blocks.CharBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))])))])), ('modal_image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))])), ('columns', wagtail.core.blocks.StructBlock([('columns', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('width', wagtail.core.blocks.ChoiceBlock(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 11), (12, 12)], help_text='Width out of 12')), ('content', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock()), ('Accordion', wagtail.core.blocks.StructBlock([('rows', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('header', wagtail.core.blocks.CharBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))])))])), ('modal_image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))]))]))])))])), ('two_column_grid', wagtail.core.blocks.StructBlock([('height', wagtail.core.blocks.IntegerBlock(default=400, help_text='Row height in px', max_value=800, min_value=1)), ('rows', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('flip', wagtail.core.blocks.BooleanBlock(help_text='Swap position of image and paragraph', required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())]))])))])), ('countdown', wagtail.core.blocks.StructBlock([('size', wagtail.core.blocks.ChoiceBlock(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large')])), ('expires', wagtail.core.blocks.DateTimeBlock()), ('pre_title', wagtail.core.blocks.CharBlock(required=False)), ('years_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('months_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('days_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('hours_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('minutes_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('seconds_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('post_title', wagtail.core.blocks.CharBlock(required=False))])), ('contacts', wagtail.core.blocks.StructBlock([('contacts', wagtail.core.blocks.ListBlock(involvement.blocks.contact_card_block.ContactCardBlock()))])), ('events', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('show_facebook', wagtail.core.blocks.BooleanBlock(help_text='Whether to embed a Facebook page', required=False)), ('facebook_page_name', wagtail.core.blocks.CharBlock(help_text='Name of the page to show. (Must be public or accessible by the registered app_id)', required=False)), ('show_youtube', wagtail.core.blocks.BooleanBlock(help_text='Whether to show the last video from a Youtube-channel', required=False)), ('youtube_channel_id', wagtail.core.blocks.CharBlock(required=False)), ('show_google_calendar', wagtail.core.blocks.BooleanBlock(help_text='Whether to show the next few events from a google calendar', required=False)), ('google_calendar_id', wagtail.core.blocks.CharBlock(required=False))])), ('logos', wagtail.core.blocks.StructBlock([('logos', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('link', wagtail.core.blocks.URLBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False))])))])), ('counters', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock()), ('counters', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('icon', wagtail.core.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('value', wagtail.core.blocks.CharBlock()), ('description', wagtail.core.blocks.CharBlock(required=False))]))), ('style', wagtail.core.blocks.ChoiceBlock(choices=[('light', 'Light'), ('dark', 'Dark')]))])), ('image_text_card', wagtail.core.blocks.StructBlock([('cards', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock()), ('text', wagtail.core.blocks.RichTextBlock(required=False))])))]))]))])), ('divider', blocks.models.DividerBlock())], blank=True),
        ),
        migrations.AlterField(
            model_name='googleformpage',
            name='results_sv',
            field=wagtail.core.fields.StreamField([('section', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.ChoiceBlock(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large')], help_text='Include padding for this section', required=False)), ('full_width', wagtail.core.blocks.BooleanBlock(help_text='Expand this section to full page width', required=False)), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock()), ('Accordion', wagtail.core.blocks.StructBlock([('rows', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('header', wagtail.core.blocks.CharBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))])))])), ('modal_image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))])), ('columns', wagtail.core.blocks.StructBlock([('columns', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('width', wagtail.core.blocks.ChoiceBlock(choices=[(1, 1), (2, 2), (3, 3), (4, 4), (5, 5), (6, 6), (7, 7), (8, 8), (9, 9), (10, 10), (11, 11), (12, 12)], help_text='Width out of 12')), ('content', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock()), ('Accordion', wagtail.core.blocks.StructBlock([('rows', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('header', wagtail.core.blocks.CharBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))])))])), ('modal_image', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('body', wagtail.core.blocks.StreamBlock([('heading', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('subtitle', wagtail.core.blocks.CharBlock(required=False))])), ('image', wagtail.core.blocks.StructBlock([('padding', wagtail.core.blocks.BooleanBlock(required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('height', wagtail.core.blocks.IntegerBlock(default=400, min_value=1)), ('link', wagtail.core.blocks.URLBlock(required=False))])), ('image_overlay', wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False)), ('text_color', wagtail.core.blocks.ChoiceBlock(choices=[('text-light', 'Light'), ('text-dark', 'Dark')])), ('buttons', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))], required=False))])), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())])), ('divider', blocks.models.DividerBlock()), ('button_group', wagtail.core.blocks.StructBlock([('buttons', wagtail.core.blocks.ListBlock(blocks.models.ButtonBlock))])), ('icons', wagtail.core.blocks.StructBlock([('icons', wagtail.core.blocks.ListBlock(blocks.models.IconBlock))])), ('instagram', instagram.blocks.instagram_feed_chooser_block.InstagramFeedChooserBlock(help_text='Instagram feeds are created in Branding in the left menu. If you can not see it, contact info@utn.se to get access')), ('member_check', wagtail.core.blocks.StructBlock([])), ('html_code_block', blocks.models.HTMLCodeBlock())]))]))]))])))])), ('two_column_grid', wagtail.core.blocks.StructBlock([('height', wagtail.core.blocks.IntegerBlock(default=400, help_text='Row height in px', max_value=800, min_value=1)), ('rows', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('flip', wagtail.core.blocks.BooleanBlock(help_text='Swap position of image and paragraph', required=False)), ('image', wagtail.images.blocks.ImageChooserBlock()), ('paragraph', wagtail.core.blocks.StructBlock([('alignment', wagtail.core.blocks.ChoiceBlock(choices=[('Left', 'Left'), ('Center', 'Center'), ('Right', 'Right')])), ('text', wagtail.core.blocks.RichTextBlock())]))])))])), ('countdown', wagtail.core.blocks.StructBlock([('size', wagtail.core.blocks.ChoiceBlock(choices=[('S', 'Small'), ('M', 'Medium'), ('L', 'Large')])), ('expires', wagtail.core.blocks.DateTimeBlock()), ('pre_title', wagtail.core.blocks.CharBlock(required=False)), ('years_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('months_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('days_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('hours_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('minutes_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('seconds_label', wagtail.core.blocks.CharBlock(help_text='leave empty to skip this counter in the countdown', required=False)), ('post_title', wagtail.core.blocks.CharBlock(required=False))])), ('contacts', wagtail.core.blocks.StructBlock([('contacts', wagtail.core.blocks.ListBlock(involvement.blocks.contact_card_block.ContactCardBlock()))])), ('events', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock(required=True)), ('show_facebook', wagtail.core.blocks.BooleanBlock(help_text='Whether to embed a Facebook page', required=False)), ('facebook_page_name', wagtail.core.blocks.CharBlock(help_text='Name of the page to show. (Must be public or accessible by the registered app_id)', required=False)), ('show_youtube', wagtail.core.blocks.BooleanBlock(help_text='Whether to show the last video from a Youtube-channel', required=False)), ('youtube_channel_id', wagtail.core.blocks.CharBlock(required=False)), ('show_google_calendar', wagtail.core.blocks.BooleanBlock(help_text='Whether to show the next few events from a google calendar', required=False)), ('google_calendar_id', wagtail.core.blocks.CharBlock(required=False))])), ('logos', wagtail.core.blocks.StructBlock([('logos', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('link', wagtail.core.blocks.URLBlock(required=False)), ('description', wagtail.core.blocks.CharBlock(required=False))])))])), ('counters', wagtail.core.blocks.StructBlock([('title', wagtail.core.blocks.CharBlock()), ('counters', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('icon', wagtail.core.blocks.CharBlock(help_text='Material icon font icon text, as found on: https://material.io/icons')), ('value', wagtail.core.blocks.CharBlock()), ('description', wagtail.core.blocks.CharBlock(required=False))]))), ('style', wagtail.core.blocks.ChoiceBlock(choices=[('light', 'Light'), ('dark', 'Dark')]))])), ('image_text_card', wagtail.core.blocks.StructBlock([('cards', wagtail.core.blocks.ListBlock(wagtail.core.blocks.StructBlock([('image', wagtail.images.blocks.ImageChooserBlock()), ('title', wagtail.core.blocks.CharBlock()), ('text', wagtail.core.blocks.RichTextBlock(required=False))])))]))]))])), ('divider', blocks.models.DividerBlock())], blank=True),
        ),
    ]
