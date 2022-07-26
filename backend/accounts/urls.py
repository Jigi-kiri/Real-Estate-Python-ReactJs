from django.urls import path
from .views import SingupView

urlpatterns = [
    path('singup/', SingupView.as_view())
]