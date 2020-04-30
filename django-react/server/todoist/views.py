from django.shortcuts import render

from .models import Todo
from .serializers import TodoSerializer
from rest_framework import generics

class TodoListCreate(generics.ListCreateAPIView):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
