from django.shortcuts import render,HttpResponse
from .models import *


def home(request):
    banners = Banner.objects.filter(status = True)
    if len(banners) == 0:
        url = "/static/default.jpg"
    else:
        url = banners[0].banner.url
    context = {"banner": url}
    return render(request,template_name='index.html', context=context)