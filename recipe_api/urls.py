from django.urls import path
from rest_framework import routers
from recipe_api.serializers import RatingSerializer

from recipe_api.views import BookmarkViewSet, ProfileViewset, RecipeViewset, UserViewset

routes = routers.DefaultRouter()

routes.register('users', UserViewset)
routes.register('recipes', RecipeViewset)
routes.register('profile', ProfileViewset)
routes.register('bookmarks', BookmarkViewSet)
routes.register('ratings', RatingSerializer)

urlpatterns = [
    # path()
]

urlpatterns += routes.urls
