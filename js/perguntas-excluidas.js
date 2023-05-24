
// ----- CRIA AS DIVS DAS PERGUNTAS EXCLUIDAS E AS EXIBE NA TELA
const divPerguntaExcluidas = document.getElementById("perguntas-excluidas");
const exibirPerguntasExcluidas = () => {
  listaPerguntasExcluidas.forEach((el, indice) => {
    // ------------------ Cria as divs -----------------------------
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
    perguntaInformacoesData = document.createElement("span");
    perguntaInformacoesNome.innerHTML = `${el.nomeAluno} |`;
    perguntaInformacoesData.innerHTML = ` ${el.dataPergunta}`;

    perguntaCampoBotoes = document.createElement("div");
    editarButton = document.createElement("button");
    editarButtonIcone = document.createElement("i");
    editarButton.innerHTML = "EDITAR";

    recuperarButton = document.createElement("button");
    recuperarButtonIcone = document.createElement("i");
    recuperarButton.innerHTML = "RECUPERAR";
    
    motivoButton = document.createElement('button');
    motivoButtonIcone = document.createElement('i')
    motivoButton.innerHTML = 'MOTIVO'

    perguntaResposta = document.createElement("div");
    perguntaRespostaTexto = document.createElement("p");
    perguntaResposta.innerHTML = `${el.resposta}`;

    // Adiciona elas e seta as classes ------------------------------
    divPerguntaExcluidas.appendChild(pergunta);
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
    perguntaInformacoes.appendChild(perguntaInformacoesData);

    perguntaCabecalho.appendChild(perguntaCampoBotoes);
    perguntaCampoBotoes.setAttribute("class", "pergunta-campo-botoes");

    perguntaCampoBotoes.appendChild(editarButton);
    editarButton.setAttribute("class", "editarButton pergunta-botao");
    editarButton.setAttribute('onclick', `acionarModal_PE_Editar('abrir' , ${indice})`)
    editarButton.appendChild(editarButtonIcone);
    editarButtonIcone.setAttribute("class", "ph-bold ph-pencil-simple-line");

    perguntaCampoBotoes.appendChild(recuperarButton);
    recuperarButton.setAttribute("class", "recuperarButton pergunta-botao");
    recuperarButton.setAttribute("onclick", `acionarModal_PE_Recuperar('abrir', ${indice})`);
    recuperarButton.appendChild(recuperarButtonIcone);
    recuperarButtonIcone.setAttribute("class", "ph-bold ph-arrow-u-up-left");

    perguntaCampoBotoes.appendChild(motivoButton)
    motivoButton.setAttribute('class', 'motivoButton pergunta-botao')
    motivoButton.setAttribute('onclick', `acionarModal_PE_Motivo("abrir", ${indice})`)
    motivoButton.appendChild(motivoButtonIcone)
    motivoButtonIcone.setAttribute('class', 'ph ph-newspaper')

    pergunta.appendChild(perguntaResposta);
    perguntaResposta.setAttribute("class", "pergunta-campo-resposta");
    perguntaResposta.appendChild(perguntaRespostaTexto);
  });
};
exibirPerguntasExcluidas();

// ----- MODAIS -----------------------------------------------

// ----- MODAL DE EDIÇÃO
const modal_PE_Editar = document.getElementById('modal-PE-editar')
const modal_PE_Editar_campoPergunta = document.getElementById('modal-PE-pergunta')
const modal_PE_Editar_campoResposta = document.getElementById('modal-PE-resposta')

const acionarModal_PE_Editar = (acao, indice) => {

  switch (acao) {
    case 'abrir':
        localStorage.setItem('indice-pergunta-editar' , indice)
        abrirModal_PE_Editar(indice)
      break

    case 'fechar':
      fecharModal_PE_Editar(localStorage.getItem('indice-pergunta-editar'))
      break
  }
}

const abrirModal_PE_Editar = (indice) => {
  modal_PE_Editar_campoPergunta.value = listaPerguntasExcluidas[indice].pergunta
  modal_PE_Editar_campoResposta.value = listaPerguntasExcluidas[indice].resposta
  modal_PE_Editar.showModal()
}


const fecharModal_PE_Editar = (indice) => {
    listaPerguntasExcluidas[indice].pergunta = modal_PE_Editar_campoPergunta.value
    listaPerguntasExcluidas[indice].resposta = modal_PE_Editar_campoResposta.value
    armazenarPerguntasExcluidas()
    localStorage.setItem('painel-adm' , 'perguntasExcluidas')

    window.location.reload()

    localStorage.removeItem('indice-pergunta-editar')
    modalEditar.close()
}

// ------ MODAL DE RECUPERACAO -----------------

const modal_PE_Recuperar = document.getElementById('modal-PE-recuperar')
const modal_PE_Recuperar_motivo = document.getElementById('modal-recuperar-PE-motivo')

const acionarModal_PE_Recuperar = (acao, indice) => {
  switch(acao) {
    case 'abrir':
      localStorage.setItem('indice-pergunta-recuperar', indice)
      abrirModal_PE_Recuperar(indice)
      break

    case 'fechar':
      fecharModal_PE_Recuperar(localStorage.getItem('indice-pergunta-recuperar'))
      break

    case "cancelar":
        cancelarModal_PE_Recuperar()
  }

}

const abrirModal_PE_Recuperar = (indice) => {
  modal_PE_Recuperar.showModal()
  modal_PE_Recuperar_motivo.innerText = listaPerguntasExcluidas[indice].motivo
}

const fecharModal_PE_Recuperar = (indice) => {
  const pergunta = listaPerguntasExcluidas[indice].pergunta
  const resposta = listaPerguntasExcluidas[indice].resposta
  const nomeAluno = listaPerguntasExcluidas[indice].nomeAluno
  const data = listaPerguntasExcluidas[indice].dataPergunta

  const objPergunta = {
    pergunta: pergunta,
    resposta: resposta,
    nomeAluno: nomeAluno,
    dataPergunta: data,
  }

  listaPerguntaComResposta.push(objPergunta)

  listaPerguntasExcluidas.splice(indice, 1)

  armazenarPerguntarComResposta()
  armazenarPerguntasExcluidas()
  localStorage.setItem('painel-adm' , 'perguntaComResposta')

  localStorage.removeItem('indice-pergunta-recuperar')
  window.location.reload()

  modal_PE_Recuperar.close()
}

const cancelarModal_PE_Recuperar = () => {
    localStorage.removeItem('indice-pergunta-recuperar')
    modal_PE_Recuperar.close()
}

// ------ MODAL DE MOTIVO

const modal_PE_Motivo = document.getElementById('modal-PE-motivo')
const modal_PE_Motivo_campo = document.getElementById('modal-PE-motivo-campo')

const acionarModal_PE_Motivo = (acao, indice) => {
    switch(acao) {
      case 'abrir':
            abrirModal_PE_Motivo(indice)
            break
  
      case "cancelar":
            cancelarModal_PE_Motivo()
            break
    }
  
}

const abrirModal_PE_Motivo = (indice) => {
        modal_PE_Motivo_campo.innerText = listaPerguntasExcluidas[indice].motivo
        modal_PE_Motivo.showModal()
}

const cancelarModal_PE_Motivo = () => {
    modal_PE_Motivo.close()
}