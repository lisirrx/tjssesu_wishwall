from django.conf.urls import url
from django.contrib import admin
from .views import WishListView, WishDetailView

urlpatterns = [
    url(r'^$', WishListView.as_view()),
    url((r'^(?P<id>\d+)$'), WishDetailView.as_view())
]
