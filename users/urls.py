from django.urls import path
from .views import AdminRegisterView, AdminLoginView, CarouselImageView

urlpatterns = [
    path('register/', AdminRegisterView.as_view(), name='admin-register'),
    path('login/', AdminLoginView.as_view(), name='admin-login'),
    path('api/carousel-images/', CarouselImageView.as_view(), name='carousel-images'),
]
