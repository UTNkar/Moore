# Generated by Django 2.2.10 on 2020-04-04 11:30

from django.db import migrations
from itertools import chain
from django.core.serializers.json import DjangoJSONEncoder
from json import dumps
from wagtail.core.blocks.stream_block import StreamValue
from utils.data_migrations import block_filter

import copy

def body_to_section(stream_field):

    page_blocks = block_filter(copy.deepcopy(list(stream_field.raw_data)),
                               lambda block: block['type'] == 'html' or block['type'] == 'news')
    section = {
        'type': 'section',
        'value': {
            'padding': "S",
            'full_width': False,
            'body': block_filter(copy.deepcopy(list(stream_field.raw_data)),
                                 lambda block: block['type'] != 'html' and block['type'] != 'news')
        }
    }
    raw_text = dumps([section] + page_blocks, cls=DjangoJSONEncoder)
    stream_block = stream_field.stream_block
    return StreamValue(stream_block, [], is_lazy=True, raw_text=raw_text)


def sections_to_body(stream_field):
    new_stream_data = []
    for block in stream_field.raw_data:
        if('type' in block and block['type'] == 'section'):
            new_stream_data = new_stream_data + block['value']['body']
        else:
            new_stream_data.append(block)

    raw_text = dumps(new_stream_data, cls=DjangoJSONEncoder)
    stream_block = stream_field.stream_block
    return StreamValue(stream_block, [], is_lazy=True, raw_text=raw_text)


def apply_to_all_pages(apps, mapper):
    HomePage = apps.get_model('home', 'HomePage')
    WebPage = apps.get_model('home', 'WebPage')
    hps = HomePage.objects.all()
    wps = WebPage.objects.all()
    for obj in chain(hps, wps):
        obj.body_en = mapper(obj.body_en)
        obj.body_sv = mapper(obj.body_sv)
        obj.save()

def forwards(apps, schema_editor):
    apply_to_all_pages(apps, body_to_section)

def backwards(apps, schema_editor):
    apply_to_all_pages(apps, sections_to_body)


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0034_auto_20200404_1404'),
    ]

    operations = [
        migrations.RunPython(forwards, backwards)
    ]
