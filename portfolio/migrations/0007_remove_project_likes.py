# Generated by Django 4.1.13 on 2024-06-01 21:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0006_rename_end_date_project_project_date_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='likes',
        ),
    ]
