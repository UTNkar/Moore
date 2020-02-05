# Generated by Django 2.2.9 on 2020-01-27 14:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('involvement', '0021_application_rejection_date'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='position',
            options={'default_permissions': (), 'ordering': ['role'], 'verbose_name': 'Position', 'verbose_name_plural': 'Positions'},
        ),
        migrations.AlterModelOptions(
            name='role',
            options={'default_permissions': (), 'ordering': ['teams__name_sv', 'name_sv'], 'verbose_name': 'Role', 'verbose_name_plural': 'Roles'},
        ),
        migrations.AlterModelOptions(
            name='team',
            options={'default_permissions': (), 'ordering': ['name_sv'], 'verbose_name': 'Team', 'verbose_name_plural': 'Teams'},
        ),
    ]
