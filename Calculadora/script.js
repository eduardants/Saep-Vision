let numeroAtual = "0";

let numeroAnterior = "";

let operacao = null;

let esperandoNovoNumero = false;


// PEGAR A TELA

const current =
  document.getElementById("current");


const previous =
  document.getElementById("previous");


// ATUALIZAR A TELA

function atualizarTela() {

  current.textContent =
    numeroAtual;


  previous.textContent =
    numeroAnterior;

}


// ADICIONAR NÚMERO

function adicionarNumero(numero) {


  // Não deixa colocar dois pontos

  if (
    numero === "." &&
    numeroAtual.includes(".")
  ) {

    return;

  }


  // Se precisa começar um novo número

  if (esperandoNovoNumero) {


    if (numero === ".") {

      numeroAtual = "0.";

    }

    else {

      numeroAtual = numero;

    }


    esperandoNovoNumero = false;

  }


  else {


    // Se a tela está em 0

    if (
      numeroAtual === "0" &&
      numero !== "."
    ) {

      numeroAtual = numero;

    }


    else {

      numeroAtual += numero;

    }

  }


  atualizarTela();

}


// ESCOLHER OPERAÇÃO

function escolherOperacao(novaOperacao) {


  if (
    operacao !== null &&
    !esperandoNovoNumero
  ) {

    calcular();

  }


  numeroAnterior =
    numeroAtual;


  operacao =
    novaOperacao;


  esperandoNovoNumero =
    true;


  atualizarTela();

}


// CALCULAR

function calcular() {


  if (
    operacao === null ||
    numeroAnterior === ""
  ) {

    return;

  }


  const anterior =
    parseFloat(numeroAnterior);


  const atual =
    parseFloat(numeroAtual);


  let resultado;


  if (operacao === "+") {

    resultado =
      anterior + atual;

  }


  else if (operacao === "-") {

    resultado =
      anterior - atual;

  }


  else if (operacao === "*") {

    resultado =
      anterior * atual;

  }


  else if (operacao === "/") {


    if (atual === 0) {

      numeroAtual =
        "Erro";


      numeroAnterior =
        "Não é possível dividir por zero";


      operacao =
        null;


      atualizarTela();


      return;

    }


    resultado =
      anterior / atual;

  }


  else if (operacao === "%") {

    resultado =
      anterior % atual;

  }


  numeroAtual =
    String(resultado);


  numeroAnterior =
    "";


  operacao =
    null;


  esperandoNovoNumero =
    true;


  atualizarTela();

}


// LIMPAR

function limpar() {


  numeroAtual =
    "0";


  numeroAnterior =
    "";


  operacao =
    null;


  esperandoNovoNumero =
    false;


  atualizarTela();

}


// APAGAR

function apagar() {


  if (
    numeroAtual === "Erro" ||
    numeroAtual.length === 1
  ) {

    numeroAtual =
      "0";

  }


  else {

    numeroAtual =
      numeroAtual.slice(0, -1);

  }


  atualizarTela();

}


// =============================
// TECLADO
// =============================

document.addEventListener(
  "keydown",
  function(event) {


    const tecla =
      event.key;


    // NÚMEROS

    if (
      tecla >= "0" &&
      tecla <= "9"
    ) {

      adicionarNumero(tecla);

    }


    // PONTO

    else if (
      tecla === "."
    ) {

      adicionarNumero(".");

    }


    // OPERADORES

    else if (
      [
        "+",
        "-",
        "*",
        "/",
        "%"
      ].includes(tecla)
    ) {

      escolherOperacao(tecla);

    }


    // ENTER

    else if (
      tecla === "Enter" ||
      tecla === "="
    ) {

      calcular();

    }


    // ESC

    else if (
      tecla === "Escape"
    ) {

      limpar();

    }


    // BACKSPACE

    else if (
      tecla === "Backspace"
    ) {

      apagar();

    }

  }
);