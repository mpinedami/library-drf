from rest_framework import generics

from apps.books.models import Book
from apps.apis.serializers import BookSerializer


# Create your views here.

class BookAPIView(generics.ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookSerializer