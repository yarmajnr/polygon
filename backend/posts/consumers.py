import json
from channels.generic.websocket import AsyncWebsocketConsumer

class PostConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        await self.channel_layer.group_add("posts", self.channel_name)
        await self.accept()

    async def disconnect(self, close_code):
        await self.channel_layer.group_discard("posts", self.channel_name)

    async def receive(self, text_data):
        data = json.loads(text_data)
        # Handle received data

    async def post_message(self, event):
        message = event['message']
        await self.send(text_data=json.dumps(message))
