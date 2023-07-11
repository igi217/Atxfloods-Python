"""
ASGI config for atxfloods project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from django.urls import path

from api.websocket import TrafficConsumer

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'atxfloods.settings')

# URLs that handle the WebSocket connection are placed here.
websocket_urlpatterns=[
                    path(
                        "ws/traffic", TrafficConsumer.as_asgi()
                    ),
                ]
django_asgi_routes = get_asgi_application()
application = ProtocolTypeRouter( 
    {
        "websocket": AuthMiddlewareStack(
            URLRouter(
               websocket_urlpatterns
            )
        ),
        "http": django_asgi_routes
    }
)

