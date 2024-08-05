from django.test import TestCase
from .models import Post
from accounts.models import User

class PostTestCase(TestCase):
    def setUp(self):
        user = User.objects.create(username="testuser")
        Post.objects.create(title="Test Post", content="Content of the test post", author=user)

    def test_post_creation(self):
        post = Post.objects.get(title="Test Post")
        self.assertEqual(post.content, "Content of the test post")
