from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
import requests

def verify_token(request):
    return HttpResponse("loaderio-dbd029fc220afa9580507d0f2c867758", content_type="text/plan")
def index(request):
    return render(request, 'index.html')
def admin(request):
    return render(request, 'admin.html')

def uploads(request, filename):
    filetype = filename.split('.')[-1]
    url = "https://atxfloods-test.s3.amazonaws.com/"+filename
    filecontent = requests.get(url).content
    return HttpResponse(filecontent, content_type="image/"+filetype)

