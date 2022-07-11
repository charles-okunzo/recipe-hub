from django.shortcuts import render
from rest_framework import viewsets, routers
from django.contrib.auth.models import User
from recipe_api.models import Profile, Recipe
from recipe_api.serializers import ProfileSerializer, RecipeSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response

# Create your views here.

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = (IsAuthenticated,)---> Default classes enabled in settings.py
    # authentication_classes = (TokenAuthentication,)


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    # authentication_classes = (TokenAuthentication,)

    #add more information before creating a user
    def perform_create(self, serializer):
        
        if self.request.user.is_authenticated:
            serializer.save(posted_by = self.request.user)

    def destroy(self, request, *args, **kwargs):
        recipe = self.get_object()

        user = request.user
        if recipe.posted_by == user:
            recipe.delete()
            return Response(data='delete success')
        return Response(data='permission denied')
        
    #add more info i.e user before updating
    def perform_update(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(posted_by = self.request.user)

class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    # authentication_classes = (TokenAuthentication,)

    def perform_update(self, serializer):
        if self.request.user.is_authenticated:
            serializer.save(posted_by = self.request.user)

