from django.urls import path

from apps.apis.views import BookAPIView

urlpatterns = [path("", BookAPIView.as_view(), name="book_list")]
