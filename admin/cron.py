from .models import CrossingHistory, Crossing, CameraNotification, Image, Camera
from django.contrib.auth.models import User
import datetime
import pytz
from django.conf import settings
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.db.models import Q
from .helpers import Helpers
from django.core import serializers
import string
import random

image = "<img src='data:image/png;base64,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' width='200' style='background:#0d6efd;margin:12px;display:block;'/>"


def email_template_one(name, crossing_name, id):
    N = 100

    # using random.choices()
    # generating random strings
    res = ''.join(random.choices(string.ascii_lowercase +
                                 string.digits, k=N))
    email_str = f'Hi {name},\n <br/> "{crossing_name}" in your jurisdiction is currently listed as closed or caution on ATXFloods.com. If this roadway is still closed, please acknowledge it <a href="https://atxfloods.com/admin-dashboard#/acknoledgement/{id}/{res}">here</a> . If the road has reopened, please change the status to "open" by logging in to ATXFloods.com. If no action is taken after three days of the initial closure, the road status will automatically revert to "open". If the roadway, crossing or bridge must be closed for an extended period of time (due to flood damage, for example), please log in to ATXFloods.com and select "long-term closure".\n\n<br/><br/> Thanks, \n<br/> AtxBot {image}<br/><br/>'
    return email_str


def email_template_two(name, crossing_name):
    email_str = f'Hi {name},\n<br/> "{crossing_name}" in your jurisdiction was listed as closed or caution on ATXFloods.com. The absense of any further action from your end, the closure / caution was opened automatically after 72 hours of initial closure.\n\n<br/><br/> Thanks, \n<br/> AtxBot {image}<br/><br/>'

    return email_str


def camera_notification():
    print("-------- Running Camera CRON Jobs -------------")
    cameranotifications = CameraNotification.objects.all()
    for item in cameranotifications:
        zone = pytz.timezone('US/Eastern')
        now = datetime.datetime.now(zone)
        check_at = item.check_at
        check_now = check_at - datetime.timedelta(hours=float(item.hours))
        if check_at > now:
            continue
        images = Image.objects.filter(
            created_at__range=[check_now, check_at], camera_id=item.camera_id).count()

        check_at_new = now + datetime.timedelta(hours=float(item.hours))
        CameraNotification.objects.filter(
            id=item.id).update(check_at=check_at_new)
        if images >= item.expected_image or item.status == False:
            continue

        user = User.objects.filter(id=item.user_id).first()
        camera = Camera.objects.filter(id=item.camera_id).first()
        if user == None or camera == None:
            continue
        message = f"Hi, {user.first_name}, \n<br/> Camera {camera.name} sent {images} images in last {item.hours} hours but as per your input it should send atleast {item.expected_image} in {item.hours} hours. If you think it's natural, you can ignore this email. \n\n<br/><br/> Thanks,\n<br/> Atxbot. {image}<br/>"
        subject = "Camera Notification | Atxfloods.com"
        email_from = "no-reply@atxfloods.com"
        recipient_list = [user.email, "no-reply@atxfloods.com"]
        send_mail(subject, strip_tags(message), email_from,
                  recipient_list, html_message=message, fail_silently=False)
        print("Sending Email is completed")
    return


def walk_through_history():
    first_check = 1450
    second_check = 10
    print("-------- Running Closure CRON Jobs -------------")
    walk_history = CrossingHistory.objects.filter(Q(status=0) | Q(status=2))
    print(serializers.serialize('json', walk_history))
    for item in walk_history:
        user = User.objects.get(id=item.user_id)
        crossing = Crossing.objects.get(id=item.crossing_id)
        zone = pytz.timezone('US/Eastern')
        today = datetime.datetime.now(zone)
        diff_minute = (item.email_at - today).total_seconds() / 60
        diff_hour = (item.email_at - today).total_seconds() / 3600
        print(crossing.status)
        if crossing.status not in [0, 2]:
            print("No closure found")
            continue
        print(diff_minute, first_check)
        if diff_minute < first_check and item.email_count < 1:
            print("First: check", diff_minute)
            subject = 'Closure Reminder | Atxfloods.com'
            message = email_template_one(
                user.first_name, crossing.name, item.id)
            email_from = "no-reply@atxfloods.com"
            recipient_list = [user.email, "no-reply@atxfloods.com"]
            send_mail(subject, strip_tags(message), email_from,
                      recipient_list, html_message=message, fail_silently=False)

            crossinghistory = CrossingHistory(id=item.id)
            crossinghistory.email_count = 1
            crossinghistory.save(update_fields=['email_count'])

        if diff_minute < second_check and item.email_count < 2:
            print("Second: check", diff_minute)
            subject = 'Closure Reminder | Atxfloods.com'
            message = email_template_one(
                user.first_name, crossing.name, item.id)
            email_from = "no-reply@atxfloods.com"
            recipient_list = [user.email, "no-reply@atxfloods.com"]
            send_mail(subject, strip_tags(message), email_from,
                      recipient_list, html_message=message, fail_silently=False)

            crossinghistory = CrossingHistory(id=item.id)
            crossinghistory.email_count = 2
            crossinghistory.save(update_fields=['email_count'])
        if diff_minute < 0 and item.email_count < 3 and crossing.status == 2:
            print("Third: check", diff_minute)
            subject = 'Closure Reminder | Atxfloods.com'
            message = email_template_two(user.first_name, crossing.name)
            email_from = "no-reply@atxfloods.com"
            recipient_list = [user.email, "no-reply@atxfloods.com"]
            send_mail(subject, strip_tags(message), email_from,
                      recipient_list, html_message=message, fail_silently=False)
            crossinghistory = CrossingHistory(id=item.id)
            crossinghistory.email_count = 3
            crossinghistory.opened_at = today
            crossinghistory.opened_by = 0
            crossinghistory.save(
                update_fields=['email_count', 'opened_at', 'opened_by'])
            crossing.status = 1
            crossing.save(update_fields=['status'])

        if diff_minute < 0 and item.email_count < 3 and crossing.status == 0:
            print("Third: check", diff_minute)
            subject = 'Closure Reminder | Atxfloods.com'
            message = email_template_two(user.first_name, crossing.name)
            email_from = "no-reply@atxfloods.com"
            recipient_list = [user.email, "no-reply@atxfloods.com"]
            send_mail(subject, strip_tags(message), email_from,
                      recipient_list, html_message=message, fail_silently=False)
            crossinghistory = CrossingHistory(id=item.id)
            crossinghistory.email_count = 0
            crossinghistory.email_at = today + datetime.timedelta(minutes=1440)
            crossinghistory.save(
                update_fields=['email_count', 'email_at'])
            crossing.status = 2
            crossing.save(update_fields=['status'])
    return
