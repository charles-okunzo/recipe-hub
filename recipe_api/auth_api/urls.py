from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework.authtoken.views import obtain_auth_token

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)



urlpatterns = [
    path('', views.getRoutes),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('obtain-auth-token/', obtain_auth_token)
]