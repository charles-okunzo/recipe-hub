from django.urls import path
from rest_framework import routers

from recipe_api.views import RecipeViewset, UserViewset

routes = routers.DefaultRouter()

routes.register('users', UserViewset)
routes.register('recipes', RecipeViewset)

urlpatterns = [
    # path()
]

urlpatterns += routes.urls
