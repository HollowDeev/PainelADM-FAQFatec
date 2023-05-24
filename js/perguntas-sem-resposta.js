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
    perguntaInformacoesData = document.createElement("span");
    perguntaInformacoesNome.innerHTML = `${el.nomeAluno} |`;
    perguntaInformacoesData.innerHTML = ` ${el.dataPergunta}`;

    perguntaCampoBotoes = document.createElement("div");
    responderButton = document.createElement("button");
    responderButtonIcone = document.createElement("i");
    responderButton.innerHTML = "RESPONDER";

    adicionarButton = document.createElement("button");
    adicionarButtonIcone = document.createElement("i");
    adicionarButton.innerHTML = "ADICIONAR";

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
    perguntaInformacoes.appendChild(perguntaInformacoesData);

    perguntaCabecalho.appendChild(perguntaCampoBotoes);
    perguntaCampoBotoes.setAttribute("class", "pergunta-campo-botoes");

    perguntaCampoBotoes.appendChild(responderButton);
    responderButton.setAttribute("class", "responderButton pergunta-botao");
    // responderButton.setAttribute('onclick', `acionarModalEditar('abrir' , ${indice})`)
    responderButton.appendChild(responderButtonIcone);
    responderButtonIcone.setAttribute("class", "ph-bold ph-pencil-simple-line");

    perguntaCampoBotoes.appendChild(adicionarButton);
    adicionarButton.setAttribute("class", "addButton pergunta-botao");
    // adicionarButton.setAttribute('onclick', `acionarModalEditar('abrir' , ${indice})`)
    adicionarButton.appendChild(adicionarButtonIcone);
    adicionarButtonIcone.setAttribute("class", "ph-bold ph-upload-simple");

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
