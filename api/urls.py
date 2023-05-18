from . import views
from django.urls import path

urlpatterns = [
    path('crossings', views.crossings, name='api.crossings'),
    path('cameras', views.cameras, name='api.closures'),
    path('closures', views.closures, name='api.closures'),
	path('contacts/create', views.create_contact, name='api.contact.create'),
    path('trafic/increament', views.create_trafic, name="api.trafic"),
]
