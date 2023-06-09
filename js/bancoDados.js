// ----- LISTA COM AS PERGUNTAS QUE TEM RESPOSTA
var listaPerguntaComResposta = [
    {
      pergunta: "Quando começa as aulas?",
      resposta: "Comeca no dia 08/02",
      nomeAluno: "Thaua",
      tema: "Geral",
    },
  
    {
      pergunta: "Quando acaba as aulas?",
      resposta: "Nem eu sei",
      nomeAluno: "Thaua",
      tema: "geral",
    },
  
    {
      pergunta: "Quando que é as ferias??",
      resposta: "Descobre sozinho meu nobre",
      nomeAluno: "Anonimo",
      tema: "DSM",
    },
  ];
  
var listaPerguntasExcluidas = [
    {
        pergunta: "Essa pergunta foi excluida",
        resposta: 'Essa e a r esposta',
        nomeAluno: 'adm',
        tema: 'DSM',
        motivo: 'sla, foi a escolhida da vez'
    }
  ]

var listaPerguntaSemResposta = [
    {
      pergunta: "Por que?",
      resposta: "",
      nomeAluno: "Thaua",
      tema: "geral",
    },

    {
      pergunta: "Quero merenda!",
      resposta: "",
      nomeAluno: "Thaua",
      tema: "geral",
    },
]
  
  // ----- FUNÇÃO DE ARMAZENAR AS PERGUNTAS COM RESPOSTA NO LOCALSTORAGE
  const armazenarPerguntarComResposta = () => {
    let listaPerguntaComRespostaJSON = JSON.stringify(listaPerguntaComResposta)
    localStorage.setItem('perguntas-c-resposta', listaPerguntaComRespostaJSON)
  }
  
  // ----- FUNÇÃO DE ARMAZENAR AS PERGUNTAS EXCLUIDAS NO LOCALSTORAGE
  const armazenarPerguntasExcluidas = () => {
    let listaPerguntasExcluidasJSON = JSON.stringify(listaPerguntasExcluidas);
    localStorage.setItem('perguntas-excluidas', listaPerguntasExcluidasJSON);
  }

  //  ----- FUNÇÃO DE ARMAZENAR AS PERGUNTAS SEM RESPOSTA NO LOCALSTORAGE
  const armazenarPerguntasSemRespostas = () => {
    let listaPerguntaSemRespostaJSON = JSON.stringify(listaPerguntaSemResposta)
    localStorage.setItem('perguntas-s-resposta', listaPerguntaSemRespostaJSON)
  }
  
  // --------------------------  VERIFICAÇÃO  ---------------------------------
  
  
  //  ----- VERIFICA SE A LISTA DE PERGUNTAS COM RESPOSTA ESTA NO LOCALSTORAGE
  if (localStorage.getItem('perguntas-c-resposta') === null) {
  
    armazenarPerguntarComResposta()
  
  } else {
  
    var listaPerguntaComResposta = JSON.parse(localStorage.getItem('perguntas-c-resposta'))
  
  }
  
  // ------ VERIFICA SE A LISTA DE PERGUNTAS EXCLUIDAS ESTA NO LOCALSTORAGE
  if (localStorage.getItem('perguntas-excluidas') === null) {
  
    armazenarPerguntasExcluidas()
  
  } else {
  
    listaPerguntasExcluidas = JSON.parse(localStorage.getItem('perguntas-excluidas'))
  
  }

    // ------ VERIFICA SE A LISTA DE PERGUNTAS SEM RESPOSTA ESTA NO LOCALSTORAGE

  if (localStorage.getItem('perguntas-s-resposta') === null) {

    armazenarPerguntasSemRespostas()

  } else {
    listaPerguntaSemResposta = JSON.parse(localStorage.getItem('perguntas-s-resposta'))
  }
