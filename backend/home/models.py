from django.conf import settings
from django.db import models


class Sedda(models.Model):
    "Generated Model"
    asd = models.BigIntegerField()
    qwe = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
