from django.urls import path
from .views import *

urlpatterns = [
    path('', home),
    path('api/<str:menu>',list_menu_category),
    path('api/list/<int:id>', list_items)
]