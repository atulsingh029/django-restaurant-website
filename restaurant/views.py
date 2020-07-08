from django.shortcuts import render,HttpResponse,redirect
from .models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from.models import Menu
from .Serializers import MenuSerializer, CategorySerializer


def home(request):
    banners = Banner.objects.filter(status = True)
    if len(banners) == 0:
        url = "/static/default.jpg"
    else:
        url = banners[0].banner.url
    context = {"banner": url}
    return render(request,template_name='index.html', context=context)


@api_view(['GET'])
def list_menu_category(request,menu):
    if menu == 'category':
        c = Category.objects.all()
        sd = CategorySerializer(c.all(), many=True)
        sd = sd.data
        return Response(sd)


@api_view(['GET'])
def list_items(request, id):
    i = Menu.objects.filter(category=Category.objects.get(id=id))
    sd = MenuSerializer(i.all(), many=True).data
    return Response(sd)


def submit_form(request):
    data = request.POST
    form = Form(email=data['email'],function=data['function'],date=data['date'],message=data['message'])
    form.save()
    return redirect('/')