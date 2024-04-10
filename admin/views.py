import json
import base64
from django.contrib.auth.models import Permission
from django.core import serializers
from django.http import HttpResponse, JsonResponse
from django.core.paginator import Paginator
from django.db.models import Q, Subquery
from atxfloods.settings import MEDIA_ROOT
from .helpers import Helpers, auth, handle_csv_import
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate
from django.contrib.auth.models import User, update_last_login
from django.contrib.contenttypes.models import ContentType
from .models import Jurisdiction, Crossing, Camera, Image, Contact, Static, Role, CrossingHistory, CameraNotification, Trafic
import datetime
import pytz


@auth
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


@csrf_exempt
@auth
def camera_report(request):
    json_body = json.loads(request.body.decode("utf-8") or "{}")
    validator = Helpers.json_validator(
        json_body, ['date'])
    if len(validator) != 0:
        return JsonResponse({'status': 500, 'message': 'Validation Failed', 'errors': validator}, status=500)
    check_date = json_body['date']
    cameras = Camera.objects.filter(Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "") | Q(display_status=False)).order_by('id')
    per_page = request.GET.get('per_page') or cameras.count()
    page_number = request.GET.get('page_number') or 1
    paginator = Paginator(cameras, per_page)
    page_obj = paginator.get_page(page_number)

    json_response = Helpers.prepare_camera_report(page_obj, check_date)

    return JsonResponse({'status': 200, 'message': 'Request Successfull', 'data': json_response, 'totalResult': cameras.count()})


@auth
def camera_list(request):
    user_id = request.user.id
    camara_notifications = CameraNotification.objects.filter(user_id=user_id)
    camera_ids = list(map(lambda x: int(x.camera_id), camara_notifications))
    cameras = Camera.objects.filter(~Q(id__in=camera_ids))
    json_body = Helpers.parse_cameras_json(cameras)

    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'data': json_body})


@auth
def notification_toggle(request, id):
    cameranotification = CameraNotification.objects.get(id=id)
    cameranotification.status = (cameranotification.status == 0)
    cameranotification.save(update_fields=['status'])

    return JsonResponse({'status': 200, 'message': 'Status Toggled'})


@auth
def all_notification_active(request):
    CameraNotification.objects.filter(
        user_id=request.user.id).update(status=True)

    return JsonResponse({'status': 200, 'message': 'Status Changed'})


@auth
def all_notification_inactive(request):
    CameraNotification.objects.filter(
        user_id=request.user.id).update(status=False)

    return JsonResponse({'status': 200, 'message': 'Status Changed'})


@csrf_exempt
@auth
def create_notification(request):
    json_body = json.loads(request.body.decode("utf-8") or "{}")
    validator = Helpers.json_validator(
        json_body, ['camera_id', 'hours', 'expected_image'])
    if len(validator) != 0:
        return JsonResponse({'status': 500, 'message': 'Validation Failed', 'errors': validator}, status=500)
    zone = pytz.timezone('US/Eastern')
    now = datetime.datetime.now(zone)
    check_time = now + datetime.timedelta(hours=float(json_body['hours']))
    cameranotification = CameraNotification()
    cameranotification.user_id = request.user.id
    cameranotification.camera_id = json_body['camera_id']
    cameranotification.hours = json_body['hours']
    cameranotification.expected_image = json_body['expected_image']
    cameranotification.check_at = check_time
    cameranotification.save()

    return JsonResponse({'status': 200, 'message': 'Camera Notification Subscribed'})


@csrf_exempt
@auth
def update_notification(request, id):
    json_body = json.loads(request.body.decode("utf-8") or "{}")
    validator = Helpers.json_validator(
        json_body, ['camera_id', 'hours', 'expected_image'])
    if len(validator) != 0:
        return JsonResponse({'status': 500, 'message': 'Validation Failed', 'errors': validator}, status=500)
    cameranotification = CameraNotification(id=id)
    cameranotification.camera_id = json_body['camera_id']
    cameranotification.hours = json_body['hours']
    cameranotification.expected_image = json_body['expected_image']
    cameranotification.save(
        update_fields=['camera_id', 'hours', 'expected_image'])

    return JsonResponse({'status': 200, 'message': 'Camera Notification Updated'})


@auth
def delete_notification(request, id):
    cameranotification = CameraNotification(id=id)
    cameranotification.delete()

    return JsonResponse({'status': 200, 'message': 'Notification Deleted'})


@auth
def all_notification(request):
    cameranotification = CameraNotification.objects.filter(
        user_id=request.user.id).order_by('-id')
    per_page = request.GET.get('per_page') or 10
    page_number = request.GET.get('page_number') or 1

    paginator = Paginator(cameranotification, per_page)
    page_obj = paginator.get_page(page_number)

    json_body = Helpers.notification_serializer(page_obj)

    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'data': json_body, 'totalResult': cameranotification.count()})


@csrf_exempt
@auth
def all_notification_others(request):
    cameranotification = CameraNotification.objects.order_by('-id')
    per_page = request.GET.get('per_page') or 10
    page_number = request.GET.get('page_number') or 1
    request_body = json.loads(request.body.decode("utf-8") or "{}")
    filterText = request_body.get('filter')
    paginator = Paginator(cameranotification, per_page)
    page_obj = paginator.get_page(page_number)

    json_body = Helpers.all_notification_serializer(page_obj, filterText)

    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'data': json_body, 'totalResult': cameranotification.count()})


def acknowledge(request, id):
    try:
        history = CrossingHistory.objects.get(id=id)
        zone = pytz.timezone('US/Eastern')
        today = datetime.datetime.now(zone)
        email_date = today + datetime.timedelta(minutes=10)

        crossing = Crossing.objects.get(id=history.crossing_id)

        if crossing.status == 1:
            return JsonResponse({'status': 500, 'message': 'Sorry!', 'text': 'Crossing was already opened automatically by AtxBot!'})
        history.email_at = email_date
        history.email_count = 0
        history.save(update_fields=['email_at', 'email_count'])

        text = f"You successfully verified that {crossing.name} is still closed. You'll receive next notification after 48 hours. If it is a long time closure point, please login and mark it as a long time closure."
        return JsonResponse({'status': 200, 'message': 'Thank You!', 'text': text})
    except Exception as e:
        return JsonResponse({'status': 500, 'message': 'Sorry!', 'text': 'The Link is already expired!'})


@csrf_exempt
@auth
def crossing_history(request):
    per_page = request.GET.get('per_page') or 10
    page_number = request.GET.get('page_number') or 1
    request_body = json.loads(request.body.decode("utf-8"))

    start_date = request_body['start']
    end_date = request_body['end']

    if start_date != '' and end_date != '':
        crossing_history = CrossingHistory.objects.filter(created_at__range=[
            start_date, end_date]).order_by('-id')
    else:
        crossing_history = CrossingHistory.objects.all().order_by('-id')

    paginator = Paginator(crossing_history, crossing_history.count() if int(
        per_page) == -1 else per_page)
    page_obj = paginator.get_page(page_number)
    json_body = Helpers.serialize_crossing_history(page_obj, request.user)

    return JsonResponse({'status': 200, 'message': 'Request Success', 'total': crossing_history.count(), 'data': json_body})


@csrf_exempt
@auth
def me(request):
    users = User.objects.filter(id=request.user.id)
    json_body = json.loads(serializers.serialize('json', users))
    user_permissions = Helpers.make_permission_list(request.user.user_permissions.all(
    ) if not request.user.is_superuser else Permission.objects.all())
    serialized_body = Helpers.parse_users_json(json_body)
    serialized_body[0]['user_permissions'] = user_permissions
    return JsonResponse({'status': 200, 'data': serialized_body[0]})


@auth
def get_roles(request):
    roles = Role.objects.all()
    json_body = json.loads(serializers.serialize('json', roles))

    return JsonResponse({'status': 200, 'data': Helpers.role_serializer(json_body)})


@csrf_exempt
@auth
def create_roles(request):
    json_body = json.loads(request.body.decode("utf-8") or "{}")
    validator = Helpers.json_validator(json_body, ['name', 'permissions'])
    if (len(validator) != 0):
        return JsonResponse({'status': 500, 'errors': validator}, status=500)

    role = Role()
    role.name = json_body['name']
    role.permissions = json_body['permissions']
    role.save()

    return JsonResponse({'status': 200, 'message': 'Role Created'})


@csrf_exempt
@auth
def update_roles(request, id):
    json_body = json.loads(request.body.decode("utf-8") or "{}")
    validator = Helpers.json_validator(json_body, ['name', 'permissions'])
    if (len(validator) != 0):
        return JsonResponse({'status': 500, 'errors': validator}, status=500)

    role = Role(id=id)
    role.name = json_body['name']
    role.permissions = json_body['permissions']
    role.save()

    return JsonResponse({'status': 200, 'message': 'Role Update'})


@csrf_exempt
@auth
def delete_roles(request, id):
    role = Role(id=id)
    role.delete()

    return JsonResponse({'status': 200, 'message': 'Role Deleted'})


@auth
def count(request):
    crossing_count = Crossing.objects.filter(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "").count()
    closures_count = Crossing.objects.filter(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "", status__in=[0, 2, 3]).count()
    camera_count = Camera.objects.filter(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "").count()

    return JsonResponse({'status': 200, 'data': {
        'totalCrossing': crossing_count,
        'totalClosures': closures_count,
        'totalCamera': camera_count
    }})


@auth
def get_permissions(request):
    content_types = ContentType.objects.all().order_by('position')
    json_body = Helpers.content_type_serializer(content_types)
    return JsonResponse({'status': 200, 'data': json_body, 'roles': Helpers.get_all_roles()})


@auth
def get_users(request):
    per_page = request.GET.get('per_page') or 10
    page_number = request.GET.get('page_number') or 1
    search = request.GET.get('search')
    if not search:
        all_user = User.objects.filter(is_superuser=False)
    else:
        all_user = User.objects.filter(Q(first_name__icontains=search) | Q(
            last_name__icontains=search) | Q(email__icontains=search) | Q(username__icontains=search) & Q(is_superuser=False))

    paginator = Paginator(all_user, per_page)
    page_obj = paginator.get_page(page_number)
    users = json.loads(serializers.serialize('json', page_obj))

    return JsonResponse({'status': 200, 'total': all_user.count(), 'data': Helpers.parse_users_json(users)})


@csrf_exempt
@auth
def add_user(request):
    # try:
    try:
        json_body = json.loads(request.body.decode("utf-8"))
        permissions = Helpers.serialize_permission(
            json_body['user_permissions'])
        validator = Helpers.validate_user_json(json_body)
        if len(validator) != 0:
            return JsonResponse({'status': 500, 'message': 'Validation failed', 'errors': validator}, status=500)
        lat_range = [float(json_body['max_lat']), float(json_body['min_lat'])]
        lon_range = [float(json_body['max_lon']), float(json_body['min_lon'])]
        user = User()
        user.set_password(json_body['password'].strip())
        user.visible_password = json_body['password'].strip()
        user.first_name = json_body['first_name']
        user.last_name = json_body['last_name']
        user.address = json_body['address']
        user.jurisdiction = json_body['jurisdiction']
        user.max_lat = max(lat_range)
        user.min_lat = min(lat_range)
        user.max_lon = max(lon_range)
        user.min_lon = min(lon_range)
        user.is_active = json_body['is_active']
        user.username = json_body['username'].strip()
        user.email = json_body['email']
        user.phone = json_body['phone']
        user.admin_type = json_body['admin_type']
        user.save()
        user.user_permissions.set(permissions)
    except Exception as err:
        return JsonResponse({'status': 500, 'message': str(err)}, status=500)

    return JsonResponse({'status': 200, 'message': 'User Created'})


@csrf_exempt
@auth
def edit_user(request, id):
    # try:
    try:
        json_body = json.loads(request.body.decode("utf-8"))
        permissions = Helpers.serialize_permission(
            json_body['user_permissions'])
        validator = Helpers.validate_user_json(json_body, 1)
        if len(validator) != 0:
            return JsonResponse({'status': 500, 'message': 'Validation failed', 'errors': validator}, status=500)
        user = User(id=id)
        password = (json_body['password']).strip()
        previous_data = User.objects.filter(id=id).first()
        if len(password) != 0:
            user.visible_password = json_body['password']
            user.set_password(json_body['password'])
        else:
            user.visible_password = previous_data.visible_password
            user.password = previous_data.password
        lat_range = [float(json_body['max_lat']), float(json_body['min_lat'])]
        lon_range = [float(json_body['max_lon']), float(json_body['min_lon'])]
        user.first_name = json_body['first_name']
        user.last_name = json_body['last_name']
        user.address = json_body['address']
        user.jurisdiction = json_body['jurisdiction']
        user.max_lat = max(lat_range)
        user.min_lat = min(lat_range)
        user.max_lon = max(lon_range)
        user.min_lon = min(lon_range)
        user.is_active = json_body['is_active']
        user.username = json_body['username'].strip()
        user.email = json_body['email']
        user.phone = json_body['phone']
        user.admin_type = json_body['admin_type']
        user.last_login = previous_data.last_login
        user.save()
        user.user_permissions.set(permissions)

        if (len(password) != 0 and id == request.user.id):
            new_credentials = {'username': user.username,
                               'password': json_body['password']}
            json_encoded = json.dumps(new_credentials)

            token_bytes = json_encoded.encode('ascii')
            base64_bytes = base64.b64encode(token_bytes)
            _token = base64_bytes.decode('ascii')

            return JsonResponse({'status': 200, 'message': 'User Updated', '_token': _token})

    except:
        return JsonResponse({'status': 500, 'message': 'An error occured'}, status=500)

    return JsonResponse({'status': 200, 'message': 'User Updated'})


@auth
def delete_user(request, id):
    user = User(id=id)
    user.delete()

    return JsonResponse({'status': 200, 'message': 'User Deleted'})


@csrf_exempt
def login(request):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    credentials = json.loads(request.body.decode("utf-8"))
    user = authenticate(username=credentials['username'],
                        password=credentials['password'])
    if user is not None:
        # Updating Last_Login

        # Token
        token = request.body.decode("utf-8")
        token_bytes = token.encode('ascii')
        base64_bytes = base64.b64encode(token_bytes)
        _token = base64_bytes.decode('ascii')

        # Response Body
        response_body = {}
        response_body['status'] = 200
        response_body['message'] = 'Authentication Successfull'
        response_body['_token'] = _token
        response_body['is_superuser'] = user.is_superuser
        response_body['user_permissions'] = Helpers.make_permission_list(
            user.user_permissions.all() if not user.is_superuser else Permission.objects.all())
        response_body['max_lat'] = user.max_lat
        response_body['min_lat'] = user.min_lat
        response_body['max_lon'] = user.max_lon
        response_body['min_lon'] = user.min_lon
        response_body['name'] = user.first_name + " " + user.last_name
        response_body['last_login'] = user.last_login

        update_last_login(None, user=user)

        return JsonResponse(response_body)
    # Auth failed
    response_body = {}
    response_body['status'] = 500
    response_body['message'] = 'Authentication Failed'

    return JsonResponse(response_body, status=500)


@csrf_exempt
@auth
def change_password(request):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    credentials = request.user
    request_body = json.loads(request.body.decode("utf-8"))
    users = User.objects.filter(id=credentials.id)

    # you can user username or etc to get users query set
    # you can also use get method to get users
    user = users[0]
    user.visible_password = request_body['password'].strip()
    user.set_password(request_body['password'].strip())
    user.save()
    # Creqting New Token
    new_credentials = {'username': request.user.username,
                       'password': request_body['password']}
    json_encoded = json.dumps(new_credentials)

    token_bytes = json_encoded.encode('ascii')
    base64_bytes = base64.b64encode(token_bytes)
    _token = base64_bytes.decode('ascii')

    # Response Body
    response_body = {}
    response_body['status'] = 200
    response_body['message'] = 'Crdentials Changed!'
    response_body['_token'] = _token

    return JsonResponse(response_body)


@csrf_exempt
@auth
def all_crossings(request):
    per_page = request.GET.get('per_page') or 10
    page_number = request.GET.get('page_number') or 1
    status = request.GET.get('status')
    search = request.GET.get('search')
    if not status and not search:
        crossings = Crossing.objects.filter(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "").order_by('id')
    elif status and not search:
        crossings = Crossing.objects.filter(Q(status=int(status)) & Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "")).order_by('id')
    elif status and search:
        crossings = Crossing.objects.filter(Q(name__icontains=search) | Q(
            address__icontains=search) | Q(jurisdiction__icontains=search) & Q(status=int(status)) & Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "")).order_by('id')
    elif not status and search:
        crossings = Crossing.objects.filter(
            Q(name__icontains=search) | Q(address__icontains=search) |  Q(jurisdiction__icontains=search) & Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "")).order_by('id')
    paginator = Paginator(crossings, per_page)
    page_obj = paginator.get_page(page_number)
    crossings_json = Helpers.parse_crossings_json(page_obj)

    return JsonResponse({'total': crossings.count(), 'status': 200, 'data': crossings_json}, safe=False)


@csrf_exempt
@auth
def create_crossing(request):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    request_body = json.loads(request.body.decode("utf-8"))
    crossing = Crossing(
        name=request_body['name'],
        jurisdiction=request_body['jurisdiction'],
        address=request_body['address'],
        lat=request_body['lat'],
        lon=request_body['lon'],
        comment=request_body['comment'],
        status=request_body['status'],

    )
    crossing.save()

    return JsonResponse({'status': 200, 'message': 'New Crossing Created'})


@csrf_exempt
@auth
def update_crossing_status(request, id):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    request_body = json.loads(request.body.decode("utf-8"))
    user_id = request.user.id
    Helpers.create_crossing_history(
        status=request_body['status'], crossing_id=id, user_id=user_id)
    crossing = Crossing.objects.get(id=id)
    crossing.status = request_body['status']
    crossing.comment = request_body['comment']
    crossing.save()

    return JsonResponse({'status': 200, 'message': 'Crossings Updated!'})


@csrf_exempt
@auth
def update_crossing(request, id):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    request_body = json.loads(request.body.decode("utf-8"))
    Helpers.create_crossing_history(
        status=request_body['status'], crossing_id=id, user_id=request.user.id)
    crossing = Crossing.objects.get(id=id)
    crossing.name = request_body['name']
    crossing.jurisdiction = request_body['jurisdiction']
    crossing.address = request_body['address']
    crossing.lat = request_body['lat']
    crossing.lon = request_body['lon']
    crossing.comment = request_body['comment']
    crossing.status = request_body['status']
    crossing.save()

    return JsonResponse({'status': 200, 'message': 'New Crossing Created'})


@auth
def delete_crossing(request, id):
    if id is None:
        return JsonResponse({'status': 500, 'message': 'Id is required'})
    crossing = Crossing(id=id)
    crossing.delete()

    return JsonResponse({'status': 200, 'message': 'Record Deleted'})


@csrf_exempt
@auth
def import_crossing(request):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    if not request.FILES['file']:
        return JsonResponse({'status': 500, 'message': 'File is not available in Request'})
    file = request.FILES['file']
    response_data = handle_csv_import(file, request.user)
    return JsonResponse({'status': 200, 'data': response_data}, safe=False)


@csrf_exempt
@auth
def export_crossing(request):
    crossings = Crossing.objects.filter(Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "")).order_by('id')
    status_dict = {0: 'off', 1: 'on', 2: 'caution', 3: 'Longtime closure'}
    csv_str = 'Name,Jusrisdiction,Address,Latitude,Longitude,Status,Comment,Id \n'
    for crossing in crossings:
        csv_str += '"'+crossing.name+'",'+crossing.jurisdiction+',"'+crossing.address+'",' + \
            str(crossing.lat)+','+str(crossing.lon)+',' + \
            status_dict[crossing.status]+',"' + \
            crossing.comment+'",'+str(crossing.id)+'\n'
    return HttpResponse(csv_str, content_type='text/csv')


@auth
def closures(request):
    closures = Crossing.objects.filter(Q(status__in=[0, 2, 3]) & Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "")).order_by('id')
    per_page = request.GET.get('per_page') or 10
    page_number = request.GET.get('page_number') or 1

    paginator = Paginator(closures, per_page)
    page_obj = paginator.get_page(page_number)

    closures_json = Helpers.parse_crossings_json(page_obj)

    return JsonResponse({'total': closures.count(), 'status': 200, 'data': closures_json}, safe=False)


@auth
def cameras(request):
    cameras = Camera.objects.filter((Q(jurisdiction__icontains=request.user.jurisdiction if request.user.jurisdiction != "all" else "")) | Q(display_status=False)).order_by('id')
    per_page = request.GET.get('per_page') or cameras.count()
    page_number = request.GET.get('page_number') or 1
    total_images = request.GET.get('total_images') or 0
    paginator = Paginator(cameras, per_page)
    page_obj = paginator.get_page(page_number)
    camera_json = Helpers.parse_cameras_json(
        page_obj, max_limit=int(total_images))
    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'totalResult': cameras.count(), 'attributes': camera_json})


@csrf_exempt
@auth
def camera_single(request, id):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    per_page = request.GET.get('per_page') or 64
    request_body = json.loads(request.body.decode("utf-8"))

    start_date = request_body['start']
    end_date = request_body['end']

    camera = Camera.objects.filter(id=id)
    camera_json = Helpers.parse_cameras_json(camera, max_limit=int(per_page))
    if start_date != '' and end_date != '':
        images = Image.objects.filter(camera_id=id, created_at__range=[
                                      start_date, end_date]).order_by('-id')
        data = []
        for index, image in enumerate(images):
            if index == int(per_page):
                break
            image_dict = {
                'image_name': image.name,
                'created_at': image.created_at
            }

            data.append(image_dict)
        camera_json[0]['images'] = data

    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'totalResult': camera.count(), 'attributes': camera_json})


@csrf_exempt
@auth
def cameras_create(request):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    request_body = json.loads(request.body.decode("utf-8"))
    camera = Camera(
        name=request_body['name'],
        address=request_body['address'],
        unique_id=request_body['unique_id'],
        display_status=('display_status' in request_body),
        lat=request_body['lat'],
        lon=request_body['lon'],
        jurisdiction=request_body['jurisdiction']
    )
    camera.save()
    return JsonResponse({'status': 200, 'message': 'New Record Created!'})


@auth
def cameras_delete(request, id):
    if id is None:
        return JsonResponse({'status': 500, 'message': 'Id is required'})
    camera = Camera(id=id)
    camera.delete()
    return JsonResponse({'status': 200, 'message': 'Record Deleted!'})


@csrf_exempt
@auth
def cameras_update(request, id):
    if id is None:
        return JsonResponse({'status': 500, 'message': 'Id is required'})
    request_body = json.loads(request.body.decode("utf-8"))
    camera = Camera.objects.get(id=id)

    camera.name = request_body['name']
    camera.address = request_body['address']
    camera.unique_id = request_body['unique_id']
    camera.display_status = ('display_status' in request_body)
    camera.lat = request_body['lat']
    camera.lon = request_body['lon']
    camera.jurisdiction = request_body['jurisdiction']

    camera.save()

    return JsonResponse({'status': 200, 'message': 'Record Updated'})


@auth
def all_contacts(request):
    contacts = Contact.objects.order_by('id')
    per_page = request.GET.get('per_page') or contacts.count()
    page_number = request.GET.get('page_number') or 1

    paginator = Paginator(contacts, per_page)
    page_obj = paginator.get_page(page_number)

    contact_json = Helpers.parse_contacts_json(page_obj)

    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'data': contact_json})


@auth
def delete_contacts(request, id):
    if not id:
        return JsonResponse({'status': 500, 'message': 'id is Required'})
    contact = Contact(id=id)
    contact.delete()

    return JsonResponse({'status': 200, 'message': 'Record Deleted!'})


@csrf_exempt
@auth
def update_static(request, name):
    if not name:
        return JsonResponse({'status': 200, 'message': 'Parameter Name is Required'})
    request_body = json.loads(request.body.decode("utf-8"))
    static = Static.objects.get(name=name)
    static.content = request_body['content']
    static.save()

    return JsonResponse({'status': 200, 'message': 'Record Updated!'})


def get_static(request, name):
    if not name:
        return JsonResponse({'status': 200, 'message': 'Parameter Name is Required'})
    static = Static.objects.filter(name=name).first()
    data = {
        'id': static.id,
        'name': static.name,
        'content': static.content,
        'updated_at': static.updated_at
    }
    return JsonResponse({'status': 200, 'data': data})


@csrf_exempt
def access_details(request):
    request_body = json.loads(request.body.decode("utf-8"))

    traffics = Trafic.objects\
        .filter(eval(request_body.get("query")))\
        .order_by("-id")
    per_page = request.GET.get('per_page') or traffics.count()
    page_number = request.GET.get('page_number') or 1

    paginator = Paginator(traffics, per_page)
    page_obj = paginator.get_page(page_number)

    payload = Helpers.JsonParse(page_obj, [
                                "id", "session_id", "location", "ip_address", "page", "created_at", "closed_at"])

    return JsonResponse({'status': 200, 'data': payload, 'total': traffics.count()})


@csrf_exempt
def trafic_stat(request):
    request_body = json.loads(request.body.decode("utf-8"))

    traffics = Trafic.objects.filter(
        pk__in=Subquery(Trafic.objects
                        .filter(eval(request_body.get("query")))
                        .order_by("session_id", "id").distinct('session_id').values('pk'))
    ).order_by("-id")
    if traffics.count() == 0:
        return JsonResponse({'status': 200, 'data': [], 'total': 0})
    per_page = request.GET.get('per_page') or traffics.count()
    page_number = request.GET.get('page_number') or 1
    traffics = Helpers.addIncreamentalKey(traffics)
    paginator = Paginator(traffics, per_page)
    page_obj = paginator.get_page(page_number)

    payload = Helpers.JsonParse(page_obj, [
                                "id", "session_id", "location", "ip_address", "page", "created_at", "closed_at"])

    return JsonResponse({'status': 200, 'data': payload, 'total': traffics.count()})
    # zone = pytz.timezone('US/Eastern')
    # now = datetime.datetime.now(zone)
    # onedaybefore = now - datetime.timedelta(days=1)
    # oneweekbefore = now - datetime.timedelta(days=7)
    # onemonthbefore = now - datetime.timedelta(days=30)

    # daycount = Trafic.objects.filter(
    #     created_at__range=[onedaybefore, now]).count()
    # weekcount = Trafic.objects.filter(
    #     created_at__range=[oneweekbefore, now]).count()
    # monthcount = Trafic.objects.filter(
    #     created_at__range=[onemonthbefore, now]).count()
    # traffics = Trafic.objects.filter(
    #     pk__in = Subquery(Trafic.objects.all().order_by("session_id", "id").distinct('session_id').values('pk'))
    # ).order_by("-id")
    # allcount = Trafic.objects.all().count()

    # per_page = request.GET.get('per_page') or traffics.count()
    # page_number = request.GET.get('page_number') or 1

    # paginator = Paginator(traffics, per_page)
    # page_obj = paginator.get_page(page_number)

    # payload = Helpers.JsonParse(page_obj, ["id", "session_id", "location", "ip_address", "page", "created_at", "closed_at"])

    # return JsonResponse({'status': 200, 'day': daycount, 'week': weekcount, 'month': monthcount, 'all': allcount, 'data': payload})


@csrf_exempt
def image_upload(request):
    if request.method == 'GET':
        return Helpers.request_method_error('GET')
    camera_id = request.POST['camera_id']
    created_at = request.POST['created_at']
    camera = Camera.objects.filter(unique_id=camera_id)
    if (camera.count() >= 1):
        id = camera.first().id
        files = request.FILES
        for name in files:
            file = files[name]
            handle_uploaded_file(file, name)

            image = Image(
                name=name,
                camera_id=id,
                created_at=created_at
            )
            image.save()
            break

    else:
        print('camers not exists')

    return JsonResponse({'status': 200, 'message': 'Record Updated'})


@csrf_exempt
def create_jurisdiction(request):
    try:
        request_body: dict = json.loads(request.body.decode("utf-8"))
        jurisdiction_get = Jurisdiction.objects.filter(
            short_name=request_body.get("short_name")).count()
        if jurisdiction_get > 0:
            return JsonResponse({'status': 500, 'message': 'Duplicate Abbreviation. Please make sure to use an unique Abbreviation!'}, status=500)
        jurisdiction = Jurisdiction(
            name=request_body.get("name"),
            short_name=request_body.get("short_name"),
            max_lat=request_body.get("max_lat"),
            min_lat=request_body.get("min_lat"),
            max_lon=request_body.get("max_lon"),
            min_lon=request_body.get("min_lon")
        )
        jurisdiction.save()
        return JsonResponse({'status': 200, 'message': 'Jurisdiction Create Successfuly'})
    except Exception as err:
        return JsonResponse({'status': 500, 'message': str(err)}, status=500)


@auth
def list_jurisdiction(request):
    jurisdictions = Jurisdiction.objects.filter(Q(max_lat__lte=request.user.max_lat) & Q(
        min_lat__gte=request.user.min_lat) & Q(max_lon__lte=request.user.max_lon) & Q(min_lon__gte=request.user.min_lon))

    per_page = request.GET.get('per_page') or jurisdictions.count()
    page_number = request.GET.get('page_number') or 1

    paginator = Paginator(jurisdictions, per_page)
    page_obj = paginator.get_page(page_number)

    json_body = Helpers.JsonParse(page_obj, [
                                  "id", "name", "short_name", "min_lat", "max_lat", "min_lon", "max_lon", "created_at", "updated_at"])

    return JsonResponse({'status': 200, 'data': json_body, 'total': jurisdictions.count()})


@csrf_exempt
def update_jurisdiction(request, id):
    try:
        request_body: dict = json.loads(request.body.decode("utf-8"))
        jurisdiction_get = Jurisdiction.objects.filter(
            short_name=request_body.get("short_name")).count()

        jurisdiction = Jurisdiction.objects.get(id=id)
        if jurisdiction_get > 0 and request_body.get("short_name") != jurisdiction.short_name:
            return JsonResponse({'status': 500, 'message': 'Duplicate Abbreviation. Please make sure to use an unique Abbreviation!'}, status=500)
        jurisdiction.name = request_body.get("name")
        jurisdiction.short_name = request_body.get("short_name")
        jurisdiction.max_lat = request_body.get("max_lat")
        jurisdiction.min_lat = request_body.get("min_lat")
        jurisdiction.max_lon = request_body.get("max_lon")
        jurisdiction.min_lon = request_body.get("min_lon")
        jurisdiction.save(update_fields=[
                          'name', 'short_name', 'max_lat', 'min_lat', 'max_lon', 'min_lon'])
        return JsonResponse({'status': 200, 'message': 'Jurisdiction Create Successfuly'})
    except Exception as err:
        return JsonResponse({'status': 500, 'message': str(err)}, status=500)


def delete_jurisdiction(request, id):
    try:
        jurisdiction = Jurisdiction(id=id)
        jurisdiction.delete()

        return JsonResponse({'status': 200, 'message': 'Jurisdiction Deleted'})
    except Exception as err:
        return JsonResponse({'status': 200, 'message': str(err)}, status=500)


def handle_uploaded_file(file, name):
    with open(MEDIA_ROOT + name, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)
