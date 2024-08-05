from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Post
from .serializers import PostSerializer
from django.contrib.auth.models import User

class PostViewSet(viewsets.ViewSet):
    def list(self, request):
        posts = Post.objects.all()
        serializer = PostSerializer(posts, many=True)
        return Response(serializer.data)

    def create(self, request):
        user = request.user
        food_item = request.data.get('food_item')
        price = request.data.get('price')
        post = Post.objects.create(user=user, food_item=food_item, price=price)
        serializer = PostSerializer(post)
        return Response(serializer.data)

    def destroy(self, request, pk=None):
        post = Post.objects.get(pk=pk)
        post.delete()
        return Response(status=204)
