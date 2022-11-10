# Generated by Django 3.2.3 on 2022-11-10 17:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('involvement', '0027_alter_application_gdpr'),
    ]

    operations = [
        migrations.AlterField(
            model_name='application',
            name='gdpr',
            field=models.BooleanField(default=False, help_text='Jag godkänner att mina uppgifter sparas i enlighet med Uppsala teknolog- och naturvetarkårs integritetspolicy som går att hitta på <a href="{https://www.utn.se/sv/dokument}">{test länk}</a>', verbose_name='GDPR'),
        ),
    ]
