# Generated by Django 4.1.13 on 2024-05-30 20:46

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0003_service_icons'),
    ]

    operations = [
        migrations.AlterField(
            model_name='skill',
            name='description',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='skill',
            name='image',
            field=models.ImageField(upload_to='skills/images/', validators=[django.core.validators.FileExtensionValidator(allowed_extensions=['jpg', 'jpeg', 'png', 'gif', 'svg'])]),
        ),
    ]
