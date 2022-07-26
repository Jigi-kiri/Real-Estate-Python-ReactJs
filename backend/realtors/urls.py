from django.urls import path
from .views import RealtorListView, RealtorView, TopSallerView

urlpatterns = [
    path('', RealtorListView.as_view()),
    path('topsaller/', TopSallerView.as_view()),
    path('<int:pk>/', RealtorView.as_view()),
]