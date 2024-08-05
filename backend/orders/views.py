from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Order
from .serializers import OrderSerializer
from django.contrib.auth.models import User

class OrderViewSet(viewsets.ViewSet):
    def list(self, request):
        user = request.user
        orders = Order.objects.filter(user=user)
        serializer = OrderSerializer(orders, many=True)
        return Response(serializer.data)

    def create(self, request):
        user = request.user
        food_item = request.data.get('food_item')
        price = request.data.get('price')
        order = Order.objects.create(user=user, food_item=food_item, price=price)
        serializer = OrderSerializer(order)
        return Response(serializer.data)
