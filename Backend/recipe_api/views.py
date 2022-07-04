from django.shortcuts import render
from rest_framework import viewsets, routers
from django.contrib.auth.models import User
from recipe_api.models import Recipe
from Backend.recipe_api.serializers import RecipeSerializer, UserSerializer

# Create your views here.

class UserViewset(viewsets.ModelViewSet):
    queryset = User
    serializer_class = UserSerializer


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe
    serializer_class = RecipeSerializer