from django.test import TestCase
from .models import Order
from accounts.models import User

class OrderTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(username="testuser")
        Order.objects.create(user=user, food_item="Burger", price=10.00)

    def test_order_creation(self):
        order = Order.objects.get(food_item="Burger")
        self.assertEqual(order.price, 10.00)
