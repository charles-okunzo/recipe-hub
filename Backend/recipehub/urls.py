from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('recipe_api.urls')),
    path('auth/', include('recipe_api.auth_api.urls'))
]
