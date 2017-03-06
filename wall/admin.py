from django.contrib import admin
from .models import Wish

class WishAdmin(admin.ModelAdmin):
    list_display = ['title', 'introduction', 'phone_number', 'wechat', 'accepted']


admin.site.register(Wish, WishAdmin)
# Register your models here.
