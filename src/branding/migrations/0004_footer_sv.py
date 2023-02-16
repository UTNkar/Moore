# Generated by Django 3.2.3 on 2023-02-15 22:38

from django.db import migrations
import wagtail.core.blocks
import wagtail.core.fields


class Migration(migrations.Migration):

    dependencies = [
        ('branding', '0003_footersettings'),
    ]

    operations = [
        migrations.RenameField(
            model_name='footersettings',
            old_name='footer',
            new_name='footer_en',
        ),
        migrations.AddField(
            model_name='footersettings',
            name='footer_sv',
            field=wagtail.core.fields.StreamField([('column', wagtail.core.blocks.StructBlock([('size', wagtail.core.blocks.IntegerBlock(max_value=12, min_value=1)), ('content', wagtail.core.blocks.RichTextBlock())]))], blank=True),
        ),
    ]