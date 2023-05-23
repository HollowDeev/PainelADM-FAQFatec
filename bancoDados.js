// ----- LISTA COM AS PERGUNTAS QUE TEM RESPOSTA
var listaPerguntaComResposta = [
    {
      id: 0,
      pergunta: "Quando começa as aulas?",
      resposta: "Comeca no dia 08/02",
      nomeAluno: "Thaua",
      dataPergunta: "22/05",
    },
  
    {
      id: 1,
      pergunta: "Quando acaba as aulas?",
      resposta: "Nem eu sei",
      nomeAluno: "Thaua",
      dataPergunta: "22/03",
    },
  
    {
      id: 2,
      pergunta: "Quando que é as ferias??",
      resposta: "Descobre sozinho meu nobre",
      nomeAluno: "Anonimo",
      dataPergunta: "22/03",
    },
  ];
  
  var listaPerguntasExcluidas = [
    {
        id: 3,
        pergunta: "Essa pergunta foi excluida",
        resposta: 'Essa e a r esposta',
        nomeAluno: 'eu mesmo',
        dataPergunta: '23/05',
        motivo: 'sla, foi a escolhida da vez'
    }
  ]
  
  // ----- FUNÇÃO DE ARMAZENAR AS PERGUNTAS COM RESPOSTA NO LOCALSTORAGE
  const armazenarPerguntarComResposta = () => {
    let listaPerguntaComRespostaJSON = JSON.stringify(listaPerguntaComResposta)
    localStorage.setItem('perguntas-c-resposta', listaPerguntaComRespostaJSON)
  }
  
  // ----- FUNÇÃO DE ARMAZENAS AS PERGUNTAS EXCLUIDAS NO LOCALSTORAGE
  function armazenarPerguntasExcluidas() {
    let listaPerguntasExcluidasJSON = JSON.stringify(listaPerguntasExcluidas);
    localStorage.setItem('perguntas-excluidas', listaPerguntasExcluidasJSON);
  }
  
  // --------------------------  VERIFICAÇÃO  ---------------------------------
  
  
  //  ----- VERIFICA SE A LISTA DE PERGUNTAS COM RESPOSTA ESTA NO LOCALSTORAGE
  if (localStorage.getItem('perguntas-c-resposta') === null) {
  
    armazenarPerguntarComResposta()
  
  } else {
  
    var listaPerguntaComResposta = JSON.parse(localStorage.getItem('perguntas-c-resposta'))
  
  }
  
  // ------ VERIFICA SE A LISTA DE PERGUNTAS SEM RESPOSTA ESTA NO LOCALSTORAGE
  if (localStorage.getItem('perguntas-excluidas') === null) {
  
    armazenarPerguntasExcluidas()
  
  } else {
  
    listaPerguntasExcluidas = JSON.parse(localStorage.getItem('perguntas-excluidas'))
  
  }