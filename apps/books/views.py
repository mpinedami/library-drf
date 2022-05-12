from django.views.generic import ListView

from apps.books.models import Book

class BookListView(ListView):
    model = Book
    template_name = "book_list.html"