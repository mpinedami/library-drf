from factory import Faker
from factory.django import DjangoModelFactory

from .models import Book


class BookFactory(DjangoModelFactory):
    class Meta:
        model = Book

    title = Faker("sentence", nb_words=3)
    subtitle = Faker("sentence", nb_words=20)
    author = Faker("name")
    isbn = Faker("isbn13")
