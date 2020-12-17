# Generated by Django 3.1.4 on 2020-12-17 14:03

from django.db import migrations
from django.db.models import Q
from members.models import Member

def get_user_info(apps, schema_editor):
    iterations = 1
    members_to_update = Member.objects.filter(Q(name="") | Q(person_nr=""))
    for member in members_to_update:
        if iterations % 5 == 0:
            print(
                "{} / {} members updated".format(
                    iterations,
                    len(members_to_update)
                )
            )
        success = member.fetch_and_save_melos_info()
        if not success:
            print("Could not fetch data for user {}".format(member.username))

        iterations += 1

class Migration(migrations.Migration):

    dependencies = [
        ('members', '0012_auto_20201217_1459'),
    ]

    operations = [
        migrations.RunPython(
            get_user_info,
            reverse_code=migrations.RunPython.noop
        )
    ]