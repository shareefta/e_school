from django.contrib import admin
from .models import Admin, CarouselImage

# Register your models here.
class CarouselImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'caption', 'created_at']
    search_fields = ['caption']
    

admin.site.register(Admin)
admin.site.register(CarouselImage)
