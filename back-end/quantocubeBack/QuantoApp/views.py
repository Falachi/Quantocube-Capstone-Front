# myapp/views.py
from django.shortcuts import render, redirect
from .models import user_collection
from django.http import HttpResponse
from .forms import UserForm

def index(request):
  return HttpResponse("<h1>App is running..</h1>")

def add_user(request):
  if request.method == 'POST':
    form = UserForm(request.POST)
    if form.is_valid():
      username = form.cleaned_data['username']
      password = form.cleaned_data['password']
      records = {
        "username": username,
        "password": password
      }
      user_collection.insert_one(records)
      return HttpResponse("New person is added")
  else:
    form = UserForm()
  
  return render(request, 'Users/add_user.html', {'form': form})

def get_all_user(request):
  users = user_collection.find()
  user_list = "<br>".join([f"Username: {user['username']}, Password: {user['password']}" for user in users])
  return HttpResponse(user_list)
