from django.urls import path
from rest_framework import routers

from recipe_api.views import ProfileViewset, RecipeViewset, UserViewset

routes = routers.DefaultRouter()

routes.register('users', UserViewset)
routes.register('recipes', RecipeViewset)
routes.register('profile', ProfileViewset)

urlpatterns = [
    # path()
]

urlpatterns += routes.urls
