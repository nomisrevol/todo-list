from django.urls import path
from . import views

urlpatterns = [
    path('api/todoist/', views.TodoListCreate.as_view())
]
