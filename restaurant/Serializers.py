from rest_framework import serializers
from .models import Menu, Category


class MenuSerializer(serializers.ModelSerializer):
    class Meta:
        model = Menu
        fields = ['category','name','price','image','text']



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name','image','id']