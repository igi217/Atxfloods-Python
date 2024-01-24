from typing import List
from django.http import JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import Permission
from django.core.files.storage import FileSystemStorage
from .models import Trafic, Crossing, Image, Role, CrossingHistory, Camera
from django.db.models import Q
from django.core import serializers
from django.contrib.auth.models import User
import datetime
import pytz
import pandas
import json
import base64


class Helpers:
    def addIncreamentalKey(querySet: List[Trafic]):
        
        for (index, item) in enumerate(querySet):
            item.id = (querySet.count() -index)
            
        return querySet
    def JsonParse(obj: List[object], values: List[str]):
        resultJson = []

        for item in obj:
            tmpDict = {}
            for key in values:
                tmpDict[key] = item.__getattribute__(key)
            resultJson.append(tmpDict)
        return resultJson
    def prepare_camera_report(cameras, date):
        start_time = datetime.datetime.combine(datetime.datetime.strptime(date, "%Y-%m-%d").date(), datetime.datetime.min.time())
        end_time = datetime.datetime.combine(datetime.datetime.strptime(date, "%Y-%m-%d").date(), datetime.datetime.max.time())
        res_list = []
        for camera in cameras:
            image_count = Image.objects.filter(camera_id=camera.id, created_at__range=[start_time, end_time]).count()
            tmp_dict = {
                'id': camera.id,
                'unique_id': camera.unique_id,
                'date': date,
                'name' : camera.name,
                'address': camera.address,
                'image': image_count
            }
            res_list.append(tmp_dict)

        return res_list
    def notification_serializer(notis):
        res_list = []

        for noti in notis:
            check_now = noti.check_at
            now = check_now - datetime.timedelta(hours=float(noti.hours))
            # user = User.objects.filter(id=noti.user).first()
            get_images = Image.objects.filter(
                created_at__range=[now, check_now], camera_id=noti.camera_id).count()

            camera = Camera.objects.filter(id=noti.camera_id).first()
            if camera == None:
                continue
            tmp_dict = {
                'camera_id': camera.id,
                'camera_name': camera.name,
                'camera_address': camera.address,
                'expected_image': noti.expected_image,
                'get_image': get_images,
                'hours': noti.hours,
                'id': noti.id,
                'status': noti.status,
                'caution': noti.expected_image > get_images,
                'from': now.isoformat(),
                'to': check_now.isoformat()
            }

            res_list.append(tmp_dict)
        return res_list
    def all_notification_serializer(notis, filterText: str):
        res_list = []

        for noti in notis:
            check_now = noti.check_at
            now = check_now - datetime.timedelta(hours=float(noti.hours))
            user = User.objects.filter(id=noti.user_id).first()
            get_images = Image.objects.filter(
                created_at__range=[now, check_now], camera_id=noti.camera_id).count()

            camera = Camera.objects.filter(id=noti.camera_id).first()
            if camera == None:
                continue
            tmp_dict = {
                'name' : f"{user.first_name} {user.last_name}",
                'camera_id': camera.id,
                'camera_name': camera.name,
                'camera_address': camera.address,
                'expected_image': noti.expected_image,
                'get_image': get_images,
                'hours': noti.hours,
                'id': noti.id,
                'status': noti.status,
                'caution': noti.expected_image > get_images,
                'from': now.isoformat(),
                'to': check_now.isoformat()
            }
            if filterText.lower() in str(tmp_dict).lower():
                res_list.append(tmp_dict)
        return res_list
    def create_crossing_history(status, crossing_id, user_id):
        crossing = Crossing.objects.get(id=crossing_id)
        zone = pytz.timezone('US/Eastern')
        today = datetime.datetime.now(zone)
        email_date = today + datetime.timedelta(minutes=4320)

        if int(crossing.status) == int(status):
            return
        crossing_history = CrossingHistory.objects.filter(
            Q(crossing_id=crossing_id) & ~Q(status=1)).first()
        if crossing_history != None:
            if int(status) == 1:
                crossing_history.status = 1
                crossing_history.opened_by = user_id
                crossing_history.opened_at = today
                crossing_history.save(
                    update_fields=['status', 'opened_by', 'opened_at'])
            else:
                crossing_history.status = int(status)
                crossing_history.save(update_fields=['status'])
        else:
            c = CrossingHistory(
                status=int(status),
                user_id=user_id,
                crossing_id=crossing_id,
                email_at=email_date
            )
            c.save()
        # if int(crossing.status) != int(status):
        #     crossing_history = CrossingHistory.objects.filter(Q(crossing_id=crossing_id) & Q(status != 1))
        #     if crossing_history.count() > 0:
        #         crossing_history

        #         crossing_history.save()
        return

    def serialize_crossing_history(history_list, curuser):
        res_list = []
        status_dict = {
            0: 'closed',
            1: 'open',
            2: 'caution',
            3: 'longtime closure'
        }
        for history in history_list:
            crossing = Crossing.objects.filter(id=history.crossing_id).first()
            if crossing != None:
                crossing_detail = {
                    'id': crossing.id,
                    'name': crossing.name,
                    'address': crossing.address
                }
            else:
                crossing_detail = 'Not Found'
                continue

            user = User.objects.filter(id=history.user_id).first()
            if user != None:
                user_detail = {
                    'name': user.first_name + " " + user.last_name,
                    'email': user.email,
                    'phone': user.phone
                }
            else:
                user_detail = None

            opened_by = User.objects.filter(id=history.opened_by).first()
            if opened_by != None:
                opened_by_details = {
                    'name': opened_by.first_name + " " + opened_by.last_name,
                    'email': opened_by.email,
                    'phone': opened_by.phone
                }
            else:
                opened_by_details = None

            if crossing.lat > curuser.max_lat or crossing.lat < curuser.min_lat:
                continue
            if crossing.lon > curuser.max_lon or crossing.lon < curuser.min_lon:
                continue
            hist_dict = {
                'id': history.id,
                'status': status_dict[history.status],
                'user': user_detail,
                'crossing': crossing_detail,
                'created_at': history.created_at,
                'updated_at': history.updated_at,
                'email_at': history.email_at,
                'opened_by': opened_by_details,
                'opened_at': history.opened_at

            }
            res_list.append(hist_dict)
        return res_list

    def make_permission_list(permissions):
        res_list = []
        for permission in permissions:
            res_list.append(permission.codename)
        return res_list

    def get_all_roles():
        roles = Role.objects.all()
        json_body = json.loads(serializers.serialize('json', roles))

        return Helpers.role_serializer(json_body)

    def json_validator(json_body, requireds):
        errors = {}
        for item in requireds:
            if item not in json_body:
                errors[item] = item + " field is required"
        return errors

    def content_type_serializer(content_types):
        res_list = {}

        for content_type in content_types:
            permissions = Helpers.permission_from_content_type(
                content_type_id=content_type.id)
            res_list[content_type.app_label] = permissions
        return res_list

    def role_serializer(role_dict):
        res_list = []
        for item in role_dict:
            tmp = item['fields']
            tmp['id'] = item['pk']
            res_list.append(tmp)
        return res_list

    def permission_from_content_type(content_type_id):
        perm_list = {}
        permissions = Permission.objects.filter(
            content_type_id=content_type_id).order_by('position')
        for perm in permissions:
            perm_list[perm.codename] = perm.name
        return perm_list

    def parse_users_json(user_dict):
        res_list = []
        for item in user_dict:
            tmp_dict = item['fields']
            tmp_dict['id'] = item['pk']
            tmp_dict['user_permissions'] = Helpers.deserialize_permission(
                tmp_dict['user_permissions'])
            res_list.append(tmp_dict)
        return res_list

    def deserialize_permission(permission_list):
        res_list = []
        for id in permission_list:
            permission = Permission.objects.filter(id=id).first()
            res_list.append(permission.codename)
        return res_list

    def serialize_permission(permission_dict):
        res_list = []
        for value in permission_dict:
            permission = Permission.objects.get(codename=value)
            res_list.append(permission)
        return res_list

    def validate_user_json(json_body, count=0):
        error_dict = {}
        for field in ['email', 'username', 'phone', 'password']:
            if field not in json_body:
                error_dict[field] = field+" is Required"
        email = json_body['email']
        username = json_body['username']
        user_with_email = User.objects.filter(email=email)
        user_with_username = User.objects.filter(username=username)
        if (user_with_email.count() > count):
            error_dict['email'] = 'Email should be unique'

        if (user_with_username.count() > count):
            error_dict['username'] = 'Username should be unique'
        if (len(json_body['user_permissions']) == 0):
            error_dict['user_permissions'] = 'Atleast 1 permission is Required'

        return error_dict

    def parse_crossings_json(page_obj):
        statuses = {1: 'open', 0: 'closed',
                    2: 'caution', 3: 'longtime closure'}
        data = []
        for crossing in page_obj:
            crossing_dict = {
                'id': crossing.id,
                'name': crossing.name,
                'jurisdiction': crossing.jurisdiction,
                'address': crossing.address,
                'lat': crossing.lat,
                'lon': crossing.lon,
                'comment': crossing.comment,
                'status': statuses[crossing.status],
                'created_at': crossing.created_at,
                'updated_at': crossing.updated_at

            }

            data.append(crossing_dict)

        return data

    def parse_contacts_json(page_obj):
        data = []
        for contact in page_obj:
            contact_dict = {
                'id': contact.id,
                'name': contact.name,
                'email': contact.email,
                'phone': contact.phone,
                'message': contact.message,
                'jurisdiction':contact.jurisdiction,
                'created_at': contact.created_at
            }
            data.append(contact_dict)
        return data

    def parse_cameras_json(page_obj, max_limit=6):
        data = []
        for camera in page_obj:
            camera_dict = {
                'id': camera.id,
                'unique_id': camera.unique_id,
                'name': camera.name,
                'address': camera.address,
                'jurisdiction': camera.jurisdiction,
                'lat': camera.lat,
                'lon': camera.lon,
                'updated_at': camera.updated_at,
                'display_status':camera.display_status,
                'images': parse_camera_images(camera.id, max_limit)
            }
            data.append(camera_dict)
        return data

    def request_method_error(method):
        return JsonResponse({'status': 500, 'message': method + " method is not Allowed!"})


def auth(f):
    def wrap(request, *args, **kwargs):
        try:
            if 'Authorization' not in request.headers:
                return JsonResponse({'status': 403, 'message': 'Unauthenticated Request'})

            _token = request.headers['Authorization']
            token_bytes = _token.encode('ascii')
            base64_bytes = base64.b64decode(token_bytes)
            token = base64_bytes.decode('ascii')
            credentials = json.loads(token)
            user = authenticate(username=credentials['username'],
                                password=credentials['password'])
        # this check the session if userid key exist, if not it will redirect to login page
            if user is None:
                return JsonResponse({'status': 403, 'message': 'Unauthenticated Request'})
            request.user = user
        except:
            return JsonResponse({'status': 403, 'message': 'Unauthenticated Request'})
        return f(request, *args, **kwargs)
    wrap.__doc__ = f.__doc__
    wrap.__name__ = f.__name__
    return wrap


def parse_camera_images(camera_id, max_limit=0):
    query = "SELECT * FROM admin_image WHERE camera_id=%s ORDER BY id DESC LIMIT %s"
    params = [camera_id, abs(max_limit)]
    images = Image.objects.raw(query, params)
    data = []
    for index, image in enumerate(images):
        if index == max_limit:
            break
        image_dict = {
            'image_name': image.name,
            'created_at': image.created_at
        }

        data.append(image_dict)
    return data


def handle_csv_import(file, user):
    errors = []
    warnings = []
    success = 0
    statusDict = {
        'open': 1,
        'closed': 0,
        'caution': 2,
        'longtime-closure': 3
    }
    fs = FileSystemStorage()
    filename = fs.save(file.name, file)
    path = fs.path(filename)
    data = pandas.read_excel(path)

    data_dict = data.to_dict('records')
    for index, record in enumerate(data_dict):
        if not record['Marker Name']:
            errors.append("Error at Row "+str(index+1) +
                          " Marker Name is Required")
            continue
        elif not record['Address']:
            errors.append("Error at Row "+str(index+1)+" Address is Required")
            continue
        elif not record['Latitude']:
            errors.append("Error at Row "+str(index+1)+" Latitude is Required")
            continue
        elif not record['Longitude']:
            errors.append("Error at Row "+str(index+1) +
                          " Longitude is Required")
            continue
        crossing_with_address = Crossing.objects.filter(
            address=record['Address'])
        if crossing_with_address.count() > 0:
            warnings.append("Skipping Row "+str(index+1) +
                            "- duplicate of an available record/s")
            continue
        if (float(record['Latitude']) <= user.min_lat or float(record['Latitude']) >= user.max_lat):
            errors.append("Error at Row "+str(index+1) +
                          " Latitude in not in allowed range")
            continue
        if (float(record['Longitude']) <= user.min_lon or float(record['Longitude']) >= user.max_lon):
            errors.append("Error at Row "+str(index+1) +
                          " Longitude in not in allowed range")
            continue

        crossing = Crossing(
            name=record['Marker Name'],
            jurisdiction=record['Jurisdiction'],
            address=record['Address'],
            lat=record['Latitude'],
            lon=record['Longitude'],
            comment=record['Comment'],
            status=statusDict.get(str(record['Type'])) or 1,
        )
        crossing.save()
        success += 1

    fs.delete(filename)

    return {'errors': errors, 'warnings': warnings, 'successfull': success}
