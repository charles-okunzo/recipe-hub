from django.shortcuts import render
from rest_framework import viewsets, routers
from django.contrib.auth.models import User
from recipe_api.models import Profile, Recipe
from recipe_api.serializers import ProfileSerializer, RecipeSerializer, UserSerializer

# Create your views here.

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
<<<<<<< HEAD
    serializer_class = ProfileSerializer
=======
    serializer_class = ProfileSerializer
>>>>>>> diana
