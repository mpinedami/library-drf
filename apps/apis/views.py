from rest_framework import generics

from apps.apis.serializers import BookSerializer
from apps.books.models import Book

# Create your views here.


class BookAPIView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
