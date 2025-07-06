from django import forms
from .models import Inscricao

class InscricaoForm(forms.ModelForm):
    class Meta:
        model = Inscricao
        fields = ['nome', 'email']
        labels = {
            'nome': 'Nome',
            'email': 'E-mail',
        }
        widgets = {
            'nome': forms.TextInput(attrs={'placeholder': 'Digite seu nome completo'}),
            'email': forms.EmailInput(attrs={'placeholder': 'Seu Melhor Email'}),
        }