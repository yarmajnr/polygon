from django.test import TestCase
from .models import User

class UserTestCase(TestCase):
    def setUp(self):
        User.objects.create(username="testuser", wallet_balance=100.00)

    def test_user_wallet_balance(self):
        user = User.objects.get(username="testuser")
        self.assertEqual(user.wallet_balance, 100.00)
