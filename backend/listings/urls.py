from django.urls import path
from .views import ListingsView, ListingRetrieveView, SearchAPIView

urlpatterns = [
    path('', ListingsView.as_view()),
    path('search/', SearchAPIView.as_view()),
    path('<slug>/', ListingRetrieveView.as_view()),
]