// ----- CRIA AS DIVS DAS PERGUNTAS E A EXIBE NA TELA
const divPerguntaSemResposta = document.getElementById("perguntas-sem-resposta");
const exibirPerguntasSemResposta = () => {
    listaPerguntaSemResposta.forEach((el, indice) => {
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
    responderButton = document.createElement("button");
    responderButtonIcone = document.createElement("i");
    responderButton.innerHTML = "RESPONDER";

    excluirButton = document.createElement("button");
    excluirButtonIcone = document.createElement("i");
    excluirButton.innerHTML = "EXCLUIR";

    perguntaResposta = document.createElement("div");
    perguntaRespostaTexto = document.createElement("p");

    // Adiciona elas e seta as classes ------------------------------
    divPerguntaSemResposta.appendChild(pergunta);
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

    perguntaCampoBotoes.appendChild(responderButton);
    responderButton.setAttribute("class", "responderButton pergunta-botao");
    responderButton.setAttribute('onclick', `acionarModal_PSR_responder('abrir', ${indice})`)
    responderButton.appendChild(responderButtonIcone);
    responderButtonIcone.setAttribute("class", "ph-bold ph-pencil-simple-line");

    perguntaCampoBotoes.appendChild(excluirButton);
    excluirButton.setAttribute("class", "excluirButton pergunta-botao");
    // excluirButton.setAttribute("onclick", `acionarModalExcluir('abrir', ${indice})`);
    excluirButton.appendChild(excluirButtonIcone);
    excluirButtonIcone.setAttribute("class", "ph-bold ph-trash-simple");

    pergunta.appendChild(perguntaResposta);
    perguntaResposta.setAttribute("class", "pergunta-campo-resposta");
    perguntaResposta.appendChild(perguntaRespostaTexto);
  });
};
exibirPerguntasSemResposta();


// --------------- MODAL -------------------------------

const modal_PSR_responder = document.getElementById('modal-PSR-responder')
const modal_PSR_responder_pergunta = document.getElementById('modal-PSR-pergunta')
const modal_PSR_responder_resposta = document.getElementById('modal-PSR-resposta')

const acionarModal_PSR_responder = (acao, indice) => {
  switch (acao) {
    case 'abrir':
    
      localStorage.setItem('indice-pergunta-s-resposta', indice)
      abrirModal_PSR_responder(indice)
      break
    
    case 'publicar':

      if(modal_PSR_responder_resposta.value == '') {
        alert('É necessario responder a pergunta!')
      } else {
        fecharModal_PSR_responder(localStorage.getItem('indice-pergunta-s-resposta'))
      }

      break
    case 'cancelar':
      cancelarModal_PSR_responder()
      break
  }
}

const abrirModal_PSR_responder = (indice) => {
  
  modal_PSR_responder_pergunta.value = listaPerguntaSemResposta[indice].pergunta
  modal_PSR_responder.showModal()
}

const fecharModal_PSR_responder = (indice) => {
  const pergunta = modal_PSR_responder_pergunta.value 
  const resposta = modal_PSR_responder_resposta.value
  const nomeAluno = listaPerguntaSemResposta[indice].nomeAluno
  const tema = listaPerguntaSemResposta[indice].tema

  const objPergunta = {
    pergunta: pergunta,
    resposta: resposta,
    nomeAluno: nomeAluno,
    tema: tema
  }

  listaPerguntaSemResposta.splice(indice, 1)

  listaPerguntaComResposta.unshift(objPergunta)

  armazenarPerguntarComResposta()
  armazenarPerguntasSemRespostas()

  localStorage.setItem('painel-adm', 'perguntaComResposta')
  window.location.reload()

  localStorage.removeItem('indice-pergunta-s-resposta')

  modal_PSR_responder.close()
}

const cancelarModal_PSR_responder = () => {

  localStorage.removeItem('indice-pergunta-s-resposta')
  modal_PSR_responder.close()
}

