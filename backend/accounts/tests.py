# backend/accounts/tests.py
from django.test import TestCase
from django.contrib.auth import get_user_model

class UserModelTest(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='securepassword'
        )

    def test_user_creation(self):
        self.assertEqual(self.user.username, 'testuser')
        self.assertTrue(self.user.check_password('securepassword'))
        self.assertEqual(self.user.email, 'testuser@example.com')

    def test_user_str_method(self):
        self.assertEqual(str(self.user), 'testuser')
