# Generated by Django 3.1.7 on 2021-05-12 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('involvement', '0023_auto_20210501_2044'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reference',
            name='position',
            field=models.CharField(help_text='Enter the position in which your reference relates to you', max_length=255, verbose_name='Title/Role e.g. Boss'),
        ),
    ]
