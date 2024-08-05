from django.db import models
from asgiref.sync import async_to_sync
from channels.layers import get_channel_layer

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        channel_layer = get_channel_layer()
        async_to_sync(channel_layer.group_send)(
            "posts", {"type": "post_message", "message": {"title": self.title, "content": self.content}}
        )
