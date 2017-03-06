from django.http import HttpResponse, HttpRequest
from django.shortcuts import render


def index(request):
    return HttpResponse(render(''))