from . import views
from django.urls import path
from rest_framework import routers
from recipe_api.serializers import RatingSerializer

from recipe_api.views import BookmarkViewSet, ProfileViewset, RatingViewSet, RecipeViewset, UserViewset

routes = routers.DefaultRouter()

routes.register('users', UserViewset)
routes.register('recipes', RecipeViewset)
routes.register('profile', ProfileViewset)
routes.register('bookmarks', BookmarkViewSet)
routes.register('ratings', RatingViewSet)

urlpatterns = [
    # path('recipe-mod/', views.recipe_func)
]

urlpatterns += routes.urls
