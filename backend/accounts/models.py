from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    wallet_balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.00)
