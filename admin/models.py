from django.db import models


class Crossing(models.Model):
    name = models.TextField(null=False)
    jurisdiction = models.TextField(null=True)
    address = models.TextField(null=True)
    lat = models.FloatField(default=0, null=False)
    lon = models.FloatField(default=0, null=False)
    comment = models.TextField(null=True)
    status = models.IntegerField(default=0, null=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Camera(models.Model):
    unique_id = models.TextField(null=False)
    name = models.TextField(null=True)
    address = models.TextField(null=False)
    lat = models.FloatField(default=0, null=True)
    lon = models.FloatField(default=0, null=True)
    display_status = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Image(models.Model):
    camera_id = models.IntegerField(null=False)
    name = models.TextField(null=False)
    hash = models.TextField()
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField(auto_now=True)


class Contact(models.Model):
    name = models.TextField(null=True)
    email = models.TextField(null=True)
    phone = models.TextField(null=True)
    message = models.TextField(null=True)
    jurisdiction = models.TextField(null = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Static(models.Model):
    name = models.TextField(null=False, unique=True)
    content = models.TextField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Role(models.Model):
    name = models.TextField()
    permissions = models.JSONField(null=True)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)


class CrossingHistory(models.Model):
    crossing_id = models.IntegerField(null=True)
    status = models.IntegerField(null=True)
    user_id = models.IntegerField(null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    email_at = models.DateTimeField(null=True)
    opened_at = models.DateTimeField(null=True)
    opened_by = models.IntegerField(null=True)
    email_count = models.IntegerField(null=True, default=0)


class CameraNotification(models.Model):
    camera_id = models.IntegerField()
    user_id = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    hours = models.FloatField()
    status = models.BooleanField(default=True)
    check_at = models.DateTimeField()
    expected_image = models.IntegerField()
class Trafic(models.Model):
    created_at = models.DateTimeField(auto_now=True)
