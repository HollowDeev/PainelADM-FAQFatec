const btnAddPergunta = document.getElementById('botao-adicionar-pergunta')
const btnPerguntasComResposta = document.getElementById('botao-perguntas-com-respostas')
const btnPerguntasSemResposta = document.getElementById('botao-perguntas-sem-respostas')
const btnPerguntasExcluidas = document.getElementById('botao-perguntas-excluidas')
const btnSelecaoPerguntas = document.getElementById('selecao-perguntas')

const campoAddPerguntas = document.getElementById('adicionar-perguntas')
const campoPerguntasComResposta = document.getElementById('perguntas-resposta')
const campoPerguntasSemResposta = document.getElementById('perguntas-sem-resposta')
const campoPerguntasExcluidas = document.getElementById('perguntas-excluidas')
const tituloCampo = document.getElementById('titulo')

const selecionarBtn = (botao) => {
    switch (botao) {
        case "addPergunta":
            if (!btnAddPergunta.classList.contains('selecionado')) {

                if (btnPerguntasComResposta.classList.contains('selecionado')){
                    btnPerguntasComResposta.classList.remove('selecionado')
                    campoPerguntasComResposta.style.display = "none"
                }

                if (btnPerguntasSemResposta.classList.contains('selecionado')){
                    btnPerguntasSemResposta.classList.remove('selecionado')
                    campoPerguntasSemResposta.style.display = "none"
                }

                if (btnPerguntasExcluidas.classList.contains('selecionado')){
                    btnPerguntasExcluidas.classList.remove('selecionado')
                    campoPerguntasExcluidas.style.display = "none"
                }

                btnAddPergunta.classList.add('selecionado')
                campoAddPerguntas.style.display = "block"
                tituloCampo.style.opacity = '1'
                tituloCampo.innerHTML = "ADICIONAR PERGUNTA"
                btnSelecaoPerguntas.style.opacity = "0"
                
            } else {
                btnAddPergunta.classList.remove('selecionado')
                campoAddPerguntas.style.display = "none"
                tituloCampo.style.opacity = '0'
            }
        break

        case "pergunta-com-respostas":
            if (!btnPerguntasComResposta.classList.contains('selecionado')) {

                if (btnAddPergunta.classList.contains('selecionado')){
                    btnAddPergunta.classList.remove('selecionado')
                    campoAddPerguntas.style.display = "none"
                }

                if (btnPerguntasSemResposta.classList.contains('selecionado')){
                    btnPerguntasSemResposta.classList.remove('selecionado')
                    campoPerguntasSemResposta.style.display = "none"
                }

                if (btnPerguntasExcluidas.classList.contains('selecionado')){
                    btnPerguntasExcluidas.classList.remove('selecionado')
                    campoPerguntasExcluidas.style.display = "none"
                }

                btnPerguntasComResposta.classList.add('selecionado')
                campoPerguntasComResposta.style.display = "block"
                tituloCampo.style.opacity = '1'
                tituloCampo.innerHTML = "PERGUNTAS COM RESPOSTAS"
                btnSelecaoPerguntas.style.opacity = "1"
                
            } else {
                btnPerguntasComResposta.classList.remove('selecionado')
                campoPerguntasComResposta.style.display = "none"
                tituloCampo.style.opacity = '0'
                btnSelecaoPerguntas.style.opacity = "0"
            }
        break

        case "pergunta-sem-respostas":
            if (!btnPerguntasSemResposta.classList.contains('selecionado')) {

                if (btnAddPergunta.classList.contains('selecionado')){
                    btnAddPergunta.classList.remove('selecionado')
                    campoAddPerguntas.style.display = "none"
                }

                if (btnPerguntasComResposta.classList.contains('selecionado')){
                    btnPerguntasComResposta.classList.remove('selecionado')
                    campoPerguntasComResposta.style.display = "none"
                }

                if (btnPerguntasExcluidas.classList.contains('selecionado')){
                    btnPerguntasExcluidas.classList.remove('selecionado')
                    campoPerguntasExcluidas.style.display = "none"
                }

                btnPerguntasSemResposta.classList.add('selecionado')
                campoPerguntasSemResposta.style.display = "block"
                tituloCampo.style.opacity = '1'
                tituloCampo.innerHTML = "PERGUNTAS SEM RESPOSTAS"
                btnSelecaoPerguntas.style.opacity = "1"
                
            } else {
                btnPerguntasSemResposta.classList.remove('selecionado')
                campoPerguntasSemResposta.style.display = "none"
                tituloCampo.style.opacity = '0'
                btnSelecaoPerguntas.style.opacity = "0"
            }
        break

        case "pergunta-perguntas-excluidas":
            if (!btnPerguntasExcluidas.classList.contains('selecionado')) {

                if (btnAddPergunta.classList.contains('selecionado')){
                    btnAddPergunta.classList.remove('selecionado')
                    campoAddPerguntas.style.display = "none"
                }

                if (btnPerguntasComResposta.classList.contains('selecionado')){
                    btnPerguntasComResposta.classList.remove('selecionado')
                    campoPerguntasComResposta.style.display = "none"
                }

                if (btnPerguntasSemResposta.classList.contains('selecionado')){
                    btnPerguntasSemResposta.classList.remove('selecionado')
                    campoPerguntasSemResposta.style.display = "none"
                }

                btnPerguntasExcluidas.classList.add('selecionado')
                campoPerguntasExcluidas.style.display = "block"
                tituloCampo.style.opacity = '1'
                tituloCampo.innerHTML = "PERGUNTAS EXCLUIDAS"
                btnSelecaoPerguntas.style.opacity = "1"
                
            } else {
                btnPerguntasExcluidas.classList.remove('selecionado')
                campoPerguntasExcluidas.style.display = "none"
                tituloCampo.style.opacity = '0'
                btnSelecaoPerguntas.style.opacity = "0"
            }
        break
    }
}

const verificarCampo = () => {

    switch (localStorage.getItem('painel-adm')) {
        case 'perguntaComResposta':
            selecionarBtn('pergunta-com-respostas')
            localStorage.removeItem('painel-adm')
            break

        case 'perguntasExcluidas':
            selecionarBtn('pergunta-perguntas-excluidas')
            localStorage.removeItem('painel-adm')
    }

}