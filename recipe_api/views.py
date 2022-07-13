import json
from django.shortcuts import render
from rest_framework import viewsets, routers
from django.contrib.auth.models import User
from recipe_api.models import Bookmark, Profile, Rating, Recipe
from recipe_api.serializers import BookmarkSerializer, ProfileSerializer, RatingSerializer, RecipeSerializer, UserSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.response import Response
from django.db.models import Q
from rest_framework.decorators import api_view

# Create your views here.

class UserViewset(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # permission_classes = (IsAuthenticated,)---> Default classes enabled in settings.py
    # authentication_classes = (TokenAuthentication,)


class RecipeViewset(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = (IsAuthenticatedOrReadOnly,)---> Default classes enabled in settings.py
    # authentication_classes = (TokenAuthentication,)

    # if a query request is there returnthe queried set otherwise return everything
    def get_queryset(self):
        queryset = Recipe.objects.all()
        search = self.request.GET.get('q')

        if search:
            return queryset.filter(Q(recipe_name__icontains=search) | Q(ingredients__icontains=search) | Q(no_of_servings__icontains=search) | Q(country__icontains=search) | Q(rating__rating__icontains=search))
        return queryset

    #add more information before creating a user
    # def perform_create(self, serializer):
    #     # data=json.dumps(serializer.data)
    #     print(self.request.data['posted_by'])
    #     user = User.objects.filter(pk=self.request.data['posted_by'])[0]
    #     print(user)
    #     return Response('user created')
    #     # serializer.save(posted_by = user)
        

    # def destroy(self, request, *args, **kwargs):
    #     recipe = self.get_object()

    #     user = request.user
    #     if recipe.posted_by == user:
    #         recipe.delete()
    #         return Response(data='delete success')
    #     return Response(data='permission denied')
        
    #add more info i.e user before updating
    # def perform_update(self, serializer):
    #     if self.request.user.is_authenticated:
    #         serializer.save(posted_by = self.request.user)

class ProfileViewset(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    # permission_classes = (IsAuthenticatedOrReadOnly,)---> Default classes enabled in settings.py
    # authentication_classes = (TokenAuthentication,)

    # def perform_update(self, serializer):
    #     if self.request.user.is_authenticated:
    #         serializer.save(posted_by = self.request.user)

class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer

    # def get_queryset(self):
    #     queryset = Bookmark.objects.all()

    #     search = self.request.GET.get('filter_query')
    #     if search:
    #         return queryset.filter(user__username = search)
    #     return queryset

    # def perform_update(self, serializer):
    #     if self.request.user.is_authenticated:
    #         serializer.save(user = self.request.user)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer

    # def perform_update(self, serializer):
    #     if self.request.user.is_authenticated:
    #         serializer.save(user = self.request.user)



# @api_view(['POST'])
# def recipe_func(request):
#     data=json.loads(request.body)
#     user=User.objects.get(pk=data['posted_by'])
#     print(user)
#     recipe = Recipe(recipe_name=data['recipe_name'], description=data['description'], dish_type=data['dish_type'], prep_time_mins=data['prep_time_mins'], no_of_servings=data['no_of_servings'], cooking_time_mins=data['cooking_time_mins'], image=data['image'], ingredients=data['ingredients'], instructions=data['instructions'], country=data['country'], posted_by=user)
#     recipe.save()
#     print(data)
#     return Response('printed')