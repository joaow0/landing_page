from django.db import models

class Inscricao(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    data_inscricao = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.nome} - {self.email}'
