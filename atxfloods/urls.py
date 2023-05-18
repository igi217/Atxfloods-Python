"""atxfloods URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path, include, re_path
from django.conf import settings
from django.conf.urls.static import static
from django.shortcuts import render
from . import views
from api.views import data_feet
urlpatterns = [
    path("loaderio-dbd029fc220afa9580507d0f2c867758.txt", views.verify_token),
    path('admin/', include('admin.urls')),
    path('api/', include('api.urls')),
    path("admin-dashboard", views.admin),
    path("uploads/<str:filename>", views.uploads)
] + static('static/', document_root=settings.STATICFILES_DIRS[0]) + static('admin-dashboard/static/', document_root=settings.STATICFILES_DIRS[1]) + [path('data-feed.xml', data_feet)] + [re_path(r'^', views.index)]
