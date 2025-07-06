from django.urls import path
from . import views


urlpatterns = [
    path('', views.index, name='index'),
    path('linkedin', views.linkedin, name='linkedin'),
    path('inscricao/sucesso/', views.inscricao_sucesso, name='inscricao_sucesso'),
]