from django.shortcuts import render

# Create your views here.

def signIn(request):
    return render(request, 'signIn.html')

def home(request):
    return render(request, 'index.html')

def signUp(request):
    return render(request, 'signUp.html')