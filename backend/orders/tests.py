# backend/orders/tests.py
from django.test import TestCase
from .models import Order
from django.contrib.auth import get_user_model

class OrderModelTest(TestCase):
    def setUp(self):
        self.user = get_user_model().objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='securepassword'
        )
        self.order = Order.objects.create(
            user=self.user,
            food_item='Pizza',
            quantity=2,
            status='pending'
        )

    def test_order_creation(self):
        self.assertEqual(self.order.user, self.user)
        self.assertEqual(self.order.food_item, 'Pizza')
        self.assertEqual(self.order.quantity, 2)
        self.assertEqual(self.order.status, 'pending')

    def test_order_str_method(self):
        self.assertEqual(str(self.order), f'{self.user} - Pizza')

