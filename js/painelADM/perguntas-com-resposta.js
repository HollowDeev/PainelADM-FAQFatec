
// ----- CRIA AS DIVS DAS PERGUNTAS E A EXIBE NA TELA
const divPerguntaComResposta = document.getElementById("perguntas-resposta");
const exibirPerguntasComResposta = () => {
  listaPerguntaComResposta.forEach((el, indice) => {
    // Cria as divs --------------------------------------
    pergunta = document.createElement("div");

    // Pergunta Cabecalho
    perguntaCabecalho = document.createElement("div");

    perguntaCampoInformacoes = document.createElement("div");
    perguntaImagem = document.createElement("div");
    imagem = document.createElement("img");

    perguntaInformacoes = document.createElement("div");
    perguntaInformacoesTitulo = document.createElement("h2");
    perguntaInformacoesTitulo.innerHTML = `${el.pergunta}`;
    perguntaInformacoesNome = document.createElement("span");
    perguntaInformacoesTema = document.createElement("span");
    perguntaInformacoesNome.innerHTML = `${el.nomeAluno} |`;
    perguntaInformacoesTema.innerHTML = ` ${el.tema}`;

    perguntaCampoBotoes = document.createElement("div");
    editarButton = document.createElement("button");
    editarButtonIcone = document.createElement("i");
    editarButton.innerHTML = "EDITAR";

    excluirButton = document.createElement("button");
    excluirButtonIcone = document.createElement("i");
    excluirButton.innerHTML = "AQUIVAR";

    perguntaResposta = document.createElement("div");
    perguntaRespostaTexto = document.createElement("p");
    perguntaRespostaTexto.innerHTML = `${el.resposta}`;

    // Adiciona elas e seta as classes ------------------------------
    divPerguntaComResposta.appendChild(pergunta);
    pergunta.setAttribute("class", `pergunta pergunta-${indice}`);

    // Pergunta Cabecalho
    pergunta.appendChild(perguntaCabecalho);
    perguntaCabecalho.setAttribute("class", "pergunta-cabecalho");

    perguntaCabecalho.appendChild(perguntaCampoInformacoes);
    perguntaCampoInformacoes.setAttribute(
      "class",
      "pergunta-campo-informacoes"
    );

    perguntaCampoInformacoes.appendChild(perguntaImagem);
    perguntaImagem.setAttribute("class", "pergunta-imagem");

    perguntaImagem.appendChild(imagem);
    imagem.src = "/imagens/user.png";
    imagem.setAttribute("width", "40px");
    imagem.setAttribute("height", "40px");

    perguntaCampoInformacoes.appendChild(perguntaInformacoes);
    perguntaInformacoes.setAttribute("class", "pergunta-informacoes");

    perguntaInformacoes.appendChild(perguntaInformacoesTitulo);
    perguntaInformacoes.appendChild(perguntaInformacoesNome);
    perguntaInformacoes.appendChild(perguntaInformacoesTema);

    perguntaCabecalho.appendChild(perguntaCampoBotoes);
    perguntaCampoBotoes.setAttribute("class", "pergunta-campo-botoes");

    perguntaCampoBotoes.appendChild(editarButton);
    editarButton.setAttribute("class", "editarButton pergunta-botao");
    editarButton.setAttribute('onclick', `acionarModalEditar('abrir' , ${indice})`)
    editarButton.appendChild(editarButtonIcone);
    editarButtonIcone.setAttribute("class", "ph-bold ph-pencil-simple-line");

    perguntaCampoBotoes.appendChild(excluirButton);
    excluirButton.setAttribute("class", "excluirButton pergunta-botao");
    excluirButton.setAttribute("onclick", `acionarModalExcluir('abrir', ${indice})`);
    excluirButton.appendChild(excluirButtonIcone);
    excluirButtonIcone.setAttribute("class", "ph-bold ph-trash-simple");

    pergunta.appendChild(perguntaResposta);
    perguntaResposta.setAttribute("class", "pergunta-campo-resposta");
    perguntaResposta.appendChild(perguntaRespostaTexto);
  });
};
exibirPerguntasComResposta();


// ----- MODAIS -----------------------------------------------

// ----- MODAL DE EDIÇÃO -----------
const modalEditar = document.getElementById('modal-editar')
const modalEditar_campoPergunta = document.getElementById('modal-pergunta')
const modalEditar_campoResposta = document.getElementById('modal-resposta')

const acionarModalEditar = (acao, indice) => {

  switch (acao) {
    case 'abrir':
        localStorage.setItem('indice-pergunta-editar' , indice)
        abrirModalEditar(indice)
      break

    case 'salvar':
      if(modalEditar_campoResposta.value == '') {
        alert('Você removeu a resposta dessa pergunta, então ela será movida para as Perguntas sem resposta e não aparecerá mais para o usuario')

        removerRespostaModalEditar(localStorage.getItem('indice-pergunta-editar'))

      } else {
        salvarModalEditar(localStorage.getItem('indice-pergunta-editar'))
      }
      break
  }
}

const abrirModalEditar = (indice) => {
  modalEditar_campoPergunta.value = listaPerguntaComResposta[indice].pergunta
  modalEditar_campoResposta.value = listaPerguntaComResposta[indice].resposta
  modalEditar.showModal()
}


const salvarModalEditar = (indice) => {
    listaPerguntaComResposta[indice].pergunta = modalEditar_campoPergunta.value
    listaPerguntaComResposta[indice].resposta = modalEditar_campoResposta.value
    armazenarPerguntarComResposta()
    localStorage.setItem('painel-adm' , 'perguntaComResposta')
    window.location.reload()

    localStorage.removeItem('indice-pergunta-editar')
    modalEditar.close()
}

const removerRespostaModalEditar = (indice) => {
  const pergunta = listaPerguntaComResposta[indice].pergunta
  const resposta = modalEditar_campoResposta.value
  const nomeAluno = listaPerguntaComResposta[indice].nomeAluno
  const tema = listaPerguntaComResposta[indice].tema
  
  const objPergunta = {
    pergunta: pergunta,
    resposta: resposta,
    nomeAluno: nomeAluno,
    tema: tema
  }

  listaPerguntaSemResposta.unshift(objPergunta)
  listaPerguntaComResposta.splice(indice, 1)

  armazenarPerguntarComResposta()
  armazenarPerguntasSemRespostas()

  localStorage.setItem('painel-adm', 'perguntasSemResposta')
  window.location.reload()
  
  localStorage.removeItem('indice-pergunta-editar')
  modalEditar.close()
}

// ------ MODAL DE EXCLUSÃO -----------------

const modalExcluir = document.getElementById('modal-excluir')
const modalExcluir_motivo = document.getElementById('modal-motivo')

const acionarModalExcluir = (acao, indice) => {
  switch(acao) {
    case 'abrir':
      localStorage.setItem('indice-pergunta-excluir', indice)
      abrirModalExcluir(indice)
      break

    case 'fechar':
      fecharModalExcluir(localStorage.getItem('indice-pergunta-excluir'))
      break

    case 'cancelar':
      cancelarModalExcluir()
  }

}

const abrirModalExcluir = (indice) => {
  modalExcluir.showModal()
}

const fecharModalExcluir = (indice) => {
  const pergunta = listaPerguntaComResposta[indice].pergunta
  const resposta = listaPerguntaComResposta[indice].resposta
  const nomeAluno = listaPerguntaComResposta[indice].nomeAluno
  const tema = listaPerguntaComResposta[indice].tema
  const motivo = modalExcluir_motivo.value

  const objPergunta = {
    pergunta: pergunta,
    resposta: resposta,
    nomeAluno: nomeAluno,
    tema: tema,
    motivo: motivo
  }

  listaPerguntasExcluidas.unshift(objPergunta)

  listaPerguntaComResposta.splice(indice, 1)

  armazenarPerguntarComResposta()
  armazenarPerguntasExcluidas()

  localStorage.removeItem('indice-pergunta-excluir')
  window.location.reload()

  modalExcluir.close()
}

const cancelarModalExcluir = () => {
  localStorage.removeItem('indice-pergunta-excluir')
  modalExcluir.close()
}