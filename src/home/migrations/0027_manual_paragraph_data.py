# Generated by Django 2.2.10 on 2020-04-02 21:08

from django.db import migrations
from itertools import chain
from utils.data_migrations import stream_field_filter_map

def richtext_to_paragraph(block):
    return {
        'type': 'paragraph',
        'value': {
            'text':  block['value'],
            'alignment': "Left"
        }
    }

def paragraph_to_richtext(block):
    return {
        'type': 'paragraph',
        'value': block['value']['text'],
    }

        
def apply_to_all_pages(apps, mapper):
    HomePage = apps.get_model('home', 'HomePage')
    WebPage = apps.get_model('home', 'WebPage')
    hps = HomePage.objects.all()
    wps = WebPage.objects.all();
    for obj in chain(hps, wps):
        obj.body_en = stream_field_filter_map(obj.body_en, "paragraph", mapper)
        obj.body_sv = stream_field_filter_map(obj.body_sv, "paragraph", mapper)
        obj.save();

def forwards(apps, schema_editor):
    apply_to_all_pages(apps, richtext_to_paragraph)

def backwards(apps, schema_editor):
    apply_to_all_pages(apps, paragraph_to_richtext)
    
class Migration(migrations.Migration):

    dependencies = [
        ('home', '0026_auto_20200402_2308'),
    ]

    operations = [
        migrations.RunPython(forwards, backwards)
    ]
