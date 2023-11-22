from django.conf import settings
from django.db import models


class Sedda(models.Model):
    "Generated Model"
    asd = models.BigIntegerField()
    qwe = models.CharField(
        null=True,
        blank=True,
        max_length=100,
    )
    dasc = models.BigIntegerField(
        null=True,
        blank=True,
    )
