// =====================================
// ENTRAR NO MUSEU
// =====================================

function entrarNoMuseu() {

  document
    .getElementById("linha-do-tempo")
    .scrollIntoView({
      behavior: "smooth"
    });

}


// =====================================
// INFORMAÇÕES DOS PERÍODOS
// =====================================

const periodos = {

  antiguidade: {

    titulo: "Antiguidade",

    texto:
      "As primeiras grandes civilizações desenvolveram formas de arte ligadas à religião, à política, à representação do poder e à compreensão do mundo."

  },


  medieval: {

    titulo: "Idade Média",

    texto:
      "Durante a Idade Média, a arte esteve profundamente ligada à religião. Igrejas, manuscritos, esculturas e vitrais tornaram-se importantes formas de expressão."

  },


  renascimento: {

    titulo: "Renascimento",

    texto:
      "O Renascimento marcou uma valorização do ser humano, da ciência e da observação da natureza. A perspectiva e o estudo da anatomia transformaram a produção artística."

  },


  barroco: {

    titulo: "Barroco",

    texto:
      "O Barroco explorou o contraste, o movimento, a emoção e a dramaticidade. A luz e a sombra tornaram-se elementos fundamentais para muitos artistas."

  },


  moderno: {

    titulo: "Modernismo",

    texto:
      "A arte moderna rompeu com muitas tradições anteriores e passou a experimentar novas formas, cores, técnicas e maneiras de representar a realidade."

  }

};


// =====================================
// MOSTRAR PERÍODO
// =====================================

function mostrarPeriodo(periodo) {


  const dados =
    periodos[periodo];


  const titulo =
    document.querySelector(
      "#periodoInfo h3"
    );


  const texto =
    document.querySelector(
      "#periodoInfo span"
    );


  titulo.textContent =
    dados.titulo;


  texto.textContent =
    dados.texto;


  // Remove seleção

  document
    .querySelectorAll(
      ".timeline-item"
    )
    .forEach(item => {

      item.classList.remove(
        "active"
      );

    });


  // Descobre qual foi clicado

  const itens =
    document.querySelectorAll(
      ".timeline-item"
    );


  const ordem = [
    "antiguidade",
    "medieval",
    "renascimento",
    "barroco",
    "moderno"
  ];


  const indice =
    ordem.indexOf(periodo);


  if (itens[indice]) {

    itens[indice]
      .classList
      .add("active");

  }

}


// =====================================
// ABRIR SALA
// =====================================

function abrirSala(nome) {

  alert(
    "Em breve você poderá entrar na sala: " +
    nome +
    " 🏛️"
  );

}