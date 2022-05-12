from django.test import TestCase
from django.urls import reverse

from apps.books.factories import BookFactory


class BookTests(TestCase):
    @classmethod
    def setUpTestData(cls) -> None:
        cls.book = BookFactory.create()

    def test_book_content(self):
        self.assertNotEqual(self.book.title, "")
        self.assertNotEqual(self.book.subtitle, "")
        self.assertNotEqual(self.book.author, "")
        self.assertNotEqual(self.book.isbn, "")

    def test_book_listview(self):
        response = self.client.get(reverse("home"))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, self.book)
        self.assertTemplateUsed(response, "books/book_list.html")
