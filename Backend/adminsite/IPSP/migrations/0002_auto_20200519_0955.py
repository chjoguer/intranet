# Generated by Django 3.0.1 on 2020-05-19 14:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('IPSP', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evento',
            name='fecha',
            field=models.DateField(blank=True, null=True),
        ),
    ]
