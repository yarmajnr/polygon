from django.test import TestCase
from django.contrib.auth.models import User
from .models import Post

class PostTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(username='testuser')
        Post.objects.create(user=user, food_item='Burger', price=5.00)

    def test_post_creation(self):
        user = User.objects.get(username='testuser')
        post = Post.objects.get(user=user)
        self.assertEqual(post.food_item, 'Burger')
