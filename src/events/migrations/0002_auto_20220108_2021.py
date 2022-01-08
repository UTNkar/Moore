# Generated by Django 3.2.3 on 2022-01-08 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('events', '0001_squashed_0021_auto_20220107_2101'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='costs',
            options={'ordering': ['name'], 'verbose_name': 'Costs', 'verbose_name_plural': 'Costs'},
        ),
        migrations.AlterModelOptions(
            name='event',
            options={'ordering': ['title'], 'verbose_name': 'event', 'verbose_name_plural': 'events'},
        ),
        migrations.AlterModelOptions(
            name='eventapplication',
            options={'verbose_name': 'Event Application', 'verbose_name_plural': 'Event Applications'},
        ),
        migrations.AlterModelOptions(
            name='participant',
            options={'ordering': ['name'], 'verbose_name': 'ParticipantType', 'verbose_name_plural': 'ParticipantTypes'},
        ),
        migrations.AlterModelOptions(
            name='ticket',
            options={'verbose_name': 'Ticket', 'verbose_name_plural': 'Tickets'},
        ),
        migrations.AlterField(
            model_name='event',
            name='end_of_application',
            field=models.DateTimeField(help_text='After this date it will no longer be possible to apply.', verbose_name='Application end time'),
        ),
        migrations.AlterField(
            model_name='event',
            name='num_participants_per_ticket',
            field=models.IntegerField(default=1, help_text="This dictates the number of participants per ticket. For example, the ball would set this to 2. Don't set this to be less than 1.", verbose_name='Number of participants per ticket'),
        ),
        migrations.AlterField(
            model_name='event',
            name='price_per_participant_nonmember',
            field=models.IntegerField(default=0, help_text='Price per non-UTN-member participant, excluding of their order. For example, 1200 for a ball seat', verbose_name='Price per non-member participant'),
        ),
        migrations.AlterField(
            model_name='participant',
            name='person_nr',
            field=models.CharField(help_text='Person number using the YYYYMMDD-XXXX format.', max_length=13, verbose_name='Person number'),
        ),
        migrations.DeleteModel(
            name='Assignment',
        ),
    ]
