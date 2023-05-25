const adicionarPergunta = () => {

    const temaPergunta = document.getElementById('tema-add-pergunta').value
    const pergunta = document.getElementById('pergunta-aluno')
    const resposta = document.querySelector('.pergunta-resposta')

    if(pergunta == '' || resposta == '') {
        alert('Preencha todos os campos antes de publicar a pergunta!')
    } else {

        const objPergunta = {
            pergunta: pergunta.value,
            resposta: resposta.value,
            nomeAluno: 'adm',
            tema: temaPergunta
        }
    
        listaPerguntaComResposta.unshift(objPergunta)

        pergunta.value = ''
        resposta.value = ''

        armazenarPerguntarComResposta()
        localStorage.setItem('painel-adm', 'adicionarPergunta')

        window.location.reload()
        
        alert('Pergunta adicionada com sucesso! Caso queira editar alguma informação, confira no painel de Perguntas com resposta')
    }
}