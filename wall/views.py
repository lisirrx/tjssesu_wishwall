from django.shortcuts import render
from rest_framework.pagination import PageNumberPagination

from .models import Wish
from .serializer import WishSerializer
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateAPIView


class ResultsSetPagination(PageNumberPagination):
    page_size = 10
    page_query_param = 'page'
    max_page_size = 1000


class WishListView(ListCreateAPIView):
    serializer_class = WishSerializer
    queryset = Wish.objects.all()
    pagination_class = ResultsSetPagination




class WishDetailView(RetrieveUpdateAPIView):
    serializer_class = WishSerializer
    queryset = Wish.objects.all()
    lookup_field = 'id'




