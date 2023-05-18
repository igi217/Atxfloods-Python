from django.http import JsonResponse, HttpResponse
from admin.models import Crossing, Camera, Contact, Image, Trafic
from admin.helpers import Helpers
from django.views.decorators.csrf import csrf_exempt
from atxfloods.settings import MEDIA_ROOT
import os
import blurhash
# Create your views here.


def crossings(request):
    crossings = Crossing.objects.order_by('id')
    crossings_json = Helpers.parse_crossings_json(crossings)
    for item in crossings_json:
        if item['status'] != "longtime closure":
            continue
        item['status'] = 'closed'
    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'totalResult': crossings.count(), 'attributes': crossings_json})


def closures(request):
    closures = Crossing.objects.filter(status__in=[0, 3]).order_by('id')
    closures_json = Helpers.parse_crossings_json(closures)
    for item in closures_json:
        item['status'] = 'closed'
    return JsonResponse({'status': 200, 'message': 'Request Successfull!', 'totalResult': closures.count(), 'attributes': closures_json})


def cameras(request):
    cameras = Camera.objects.filter(display_status=True).order_by('id')

    camera_json = Helpers.parse_cameras_json(cameras)
    return JsonResponse({'status': 200, 'message': 'Request Successfull!','totalResult':cameras.count(), 'attributes': camera_json})

@csrf_exempt
def create_contact(request):
    if ('name' not in request.POST) or ('email' not in request.POST) or ('phone' not in request.POST) or ('message' not in request.POST):
        return JsonResponse({'status': 500, 'message': 'Name, Email, Phone, Message are required fields'})
    name = request.POST['name']
    email = request.POST['email']
    phone = request.POST['phone']
    message = request.POST['message']
    jurisdiction = request.POST['jurisdiction']

    if (not name) or (not email) or (not phone) or (not message):
        return JsonResponse({'status': 500, 'message': 'Name, Email, Phone, Message are required fields'})
    if (('@' not in email) or ('.' not in email)):
        return JsonResponse({'status': 500, 'message': 'Not a valid email address'})
    if len(phone) != 10:
        return JsonResponse({'status': 500, 'message': 'Phone field should contain 10 Characters'})
    contact = Contact(
        name=name,
        email=email,
        phone=phone,
        message=message,
        jurisdiction=jurisdiction
    )
    contact.save()

    return JsonResponse({'status': 200, 'message': 'Contact form saved!'})

def data_feet(request):
    crossings = Crossing.objects.order_by('id')
    status_dict = {0: 'off', 1: 'on', 2: 'caution', 3: 'Longtime closure'}
    xml_str = ''
    for crossing in crossings:
        xml_str += '<marker name="'+crossing.name.replace('&', '&amp;')+'" jurisdiction="'+crossing.jurisdiction+'" address="'+crossing.address.replace('&', '&amp;')+'" lat="'+str(crossing.lat)+'" lng="'+str(crossing.lon)+'" type="'+status_dict[crossing.status]+'" comment="'+crossing.comment.replace('&', '&amp;')+'" id="'+str(crossing.id)+'"/>\n'

    return HttpResponse('<markers>'+xml_str+'</markers>', content_type='text/xml')


def create_trafic(request):
    trafic = Trafic()
    trafic.save()
    return JsonResponse({'status': True})