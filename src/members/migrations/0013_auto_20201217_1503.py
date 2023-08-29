# Generated by Django 3.1.4 on 2020-12-17 14:03

from django.db import migrations
from django.db.models import Q
from utils.unicore_client import UnicoreClient

# This is a copy of the function used to get the unicore
# data for a member. The reason it is copied is that django migrations
# don't have access to model functions. The solution for this is to
# make a copy of the functions that populates the fields. This also
# makes sure that this migration file will work in the future, regardless
# of the changes to the Member model
def fetch_and_save_unicore_info(unicore_id):
    unicore_data = UnicoreClient.get_user_data(unicore_id)
    if unicore_data is not None:
        name = "{} {}".format(
            unicore_data['first_name'].strip(),
            unicore_data['last_name'].strip()
        )
        person_nr = unicore_data['person_number']
        return name, person_nr

    return None, None

def get_user_info(apps, schema_editor):
    Member = apps.get_model("members", "Member")
    iterations = 1
    members_to_update = Member.objects.filter(Q(name="") | Q(person_nr=""))
    for member in members_to_update:
        name, person_nr = fetch_and_save_unicore_info(member.unicore_id)
        if name is None:
            print("Could not fetch data for user {}".format(member.username))
        else:
            member.name = name
            member.person_nr = person_nr
            member.save()

        if iterations % 5 == 0:
            print(
                "{} / {} members updated".format(
                    iterations,
                    len(members_to_update)
                )
            )

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
