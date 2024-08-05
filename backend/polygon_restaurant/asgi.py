import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from django.urls import path
from posts.consumers import PostConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'polygon_restaurant.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    "websocket": AuthMiddlewareStack(
        URLRouter([
            path('ws/posts/', PostConsumer.as_asgi()),
        ])
    ),
})
