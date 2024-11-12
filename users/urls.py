from django.urls import path
from .views import AdminRegisterView, AdminLoginView

urlpatterns = [
    path('register/', AdminRegisterView.as_view(), name='admin-register'),
    path('login/', AdminLoginView.as_view(), name='admin-login'),
]
