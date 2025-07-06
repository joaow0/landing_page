from django.shortcuts import render, redirect, HttpResponseRedirect
from .forms import InscricaoForm
from django.contrib import messages

def index(request):
    form = InscricaoForm() # Inicializa um formulário vazio para o método GET

    if request.method == 'POST': # Verifica se a requisição é um POST (envio do formulário)
        form = InscricaoForm(request.POST) # Popula o formulário com os dados enviados
        if form.is_valid(): # Se os dados forem válidos
            form.save() # Salva a inscrição no banco de dados
            # AQUI ESTÁ A LIGAÇÃO PARA A PÁGINA DE SUCESSO:
            return redirect('inscricao_sucesso') # Redireciona para a URL nomeada 'inscricao_sucesso'
        # Se o formulário NÃO for válido (ex: email mal formatado), ele cairá para o render abaixo
        # e o Django exibirá os erros no template.

    # Renderiza a página inicial (se for GET ou se o POST falhou na validação)
    context = {
        'form': form,
        # ... outros dados de contexto (contador, depoimentos, etc.)
    }
    return render(request, 'loja/index.html', context)

def linkedin(request):
    return HttpResponseRedirect('https://www.linkedin.com/in/joao-pedro-sabino-dutel-224082245/')

def inscricao_sucesso(request):
    return render(request, 'loja/inscricao_sucesso.html')