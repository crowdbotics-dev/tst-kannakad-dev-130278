# Generated by Django 3.2.23 on 2023-11-22 07:30

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        ("home", "0001_load_initial_data"),
    ]

    operations = [
        migrations.CreateModel(
            name="Sedda",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("asd", models.BigIntegerField()),
                ("qwe", models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
