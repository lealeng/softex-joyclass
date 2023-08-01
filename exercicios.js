const prompt = require("prompt-sync")();

function aprovacaoAluno() {
  const nota1 = parseInt(prompt("Digite a nota do primeiro semestre: "));
  const nota2 = parseInt(prompt("Agora, digite a nota do segundo semestre: "));
  const media = (nota1 + nota2) / 2;

  if (media > 7) {
    console.log("Aluno aprovado!!! xD");
  } else if (media > 4 && media < 7) {
    console.log("O aluno está em recuperação!");
  } else if (media <= 4) {
    console.log("O aluno está reprovado!");
  }
}

// Faça um código, utilizando o Google Blockly, que execute a contagem regressiva de uma bomba,
// informando o número de segundos para explodir. Ele deverá mostrar a mensagem
// “iniciando contagem regressiva”, os segundos passados e, no final, a mensagem “BUM!”.

function contagem() {
  const segundos = 4;
  console.log("Iniciando contagem regressiva . . . ");

  for (let i = segundos; i >= 0; i--) {
    if (i > 0) {
      console.log(i + " segundos passados . . .");
    } else {
      console.log("BUM!");
    }
  }
}

//   Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o
// terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
// 1. Soma
// 2. Subtração
// 3. Multiplicação
// 4. Divisão

// Caso seja inserido um número de operação que não exista, o resultado deverá ser 0.

function calculadora() {
  let opcao;
  console.log("Iniciando a calculadora! ");

  console.log("1) Soma ");
  console.log("2) Subtração");
  console.log("3) Multiplicação");
  console.log("4) Divisão");
  console.log("5) Sair");

  opcao = parseInt(prompt("Escolha uma operação: "));
  console.log(opcao);

  switch (opcao) {
    case 1:
      soma();
      break;

    case 2:
      subtracao();
      break;

    case 3:
      multiplicacao();
      break;

    case 4:
      divisao();
      break;

    case 5:
      console.log("Até mais!!!");
      break;
    default:
      console.log("Opção inválida, tente novamente!");
      return calculadora();
  }
}

function soma() {
  console.log("Iniciando sua operação de adição.");
  const number1 = parseInt(prompt("Digite aqui um número: "));
  const number2 = parseInt(prompt("Agora, digite outro número: "));
  const total = number1 + number2;
  console.log("O resultado da sua soma é: " + total);
}

function subtracao() {
  console.log("Iniciando sua operação de subtração.");
  const number1 = parseInt(prompt("Digite aqui um número: "));
  const number2 = parseInt(prompt("Agora, digite outro número: "));
  const total = number1 - number2;
  console.log("O total da sua subtração é: " + total);
}

function multiplicacao() {
  console.log("Iniciando sua operação de multiplicação.");
  const number1 = parseInt(prompt("Digite aqui um número: "));
  const number2 = parseInt(prompt("Agora, digite outro número: "));
  const total = number1 * number2;
  console.log("O total da sua multiplicação é: " + total);
}

function divisao() {
  console.log("Iniciando sua operação de divisão.");
  const number1 = parseInt(prompt("Digite aqui um número: "));
  const number2 = parseInt(prompt("Agora, digite outro número: "));
  const total = number1 / number2;
  console.log("O total da sua divisão é: " + total);
}

calculadora();
