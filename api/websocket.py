import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'atxfloods.settings')
import django
django.setup()
import json
from channels.generic.websocket import AsyncWebsocketConsumer
from admin.models import Trafic
from channels.db import database_sync_to_async
import pytz
from datetime import datetime

class TrafficConsumer(AsyncWebsocketConsumer):
    @database_sync_to_async
    def db_close_traffic(self, id):
        zone = pytz.timezone('US/Eastern')
        now = datetime.now(zone)

        Trafic.objects.filter(id=id).update(closed_at=now)
    @database_sync_to_async
    def db_get(self, session_id):
        return Trafic.objects.filter(session_id=session_id).first()
    @database_sync_to_async
    def db_create(self, session_id, ip_address, location, page):
        trafic = Trafic(
            session_id = session_id,
            ip_address = ip_address,
            location = location,
            page = page

        )
        trafic.save()

    async def connect(self):
        print("User Connected")
        await self.accept()
        await self.send(json.dumps({'status': True, 'message': 'User Connected'}))
        return

    async def receive(self, text_data):
        headers = self.scope.get("headers")

        headers[:] = [[(item.decode("utf-8") if type(item) is bytes else item) for item in subl]
                      for subl in headers]

        headers = dict(headers)

        print(headers)
        websocket_session_id = headers.get("sec-websocket-key")

        print(websocket_session_id)

        request_body = json.loads(text_data)

        await self.db_create(
            session_id = websocket_session_id,
            ip_address = request_body.get("ip_address"),
            location = request_body.get("location"),
            page = request_body.get("page")

        )
        # await database_sync_to_async(trafic.save())

        return await self.send(json.dumps({'status': True, 'message': 'Message Received'}))

    async def disconnect(self, code):
        headers = self.scope.get("headers")

        print(headers)
        # return

        headers[:] = [[(item.decode("utf-8") if type(item) is bytes else item) for item in subl]
                      for subl in headers]

        headers = dict(headers)

        websocket_session_id = headers.get("sec-websocket-key")

        
        request_body = await self.db_get(session_id=websocket_session_id)

        # request_body = json.loads(text_data)

        await self.db_create(
            session_id = websocket_session_id,
            ip_address = request_body.ip_address,
            location = request_body.location,
            page = "closed"

        )
        await self.db_close_traffic(request_body.id)
        # await database_sync_to_async(trafic.save())

        return

        # return await self.send(json.dumps({'status': True, 'message': 'Message Received'}))
