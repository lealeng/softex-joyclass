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

/* Desenvolva um programa que recebe do usuário nome completo e ano de nascimento que seja entre 1922 e 2021. A partir dessas informações, 
o sistema mostrará o nome do usuário e a idade que completou, ou completará, no ano atual (2022).

Caso o usuário não digite um número ou apareça um inválido no campo do ano, o sistema informará o erro e continuará perguntando até 
que um valor correto seja preenchido. */

function idade() {
  const anos2 = 2023;

  const nome = prompt("Digite seu primeiro nome: ");
  const sobreNome = prompt("Digite seu sobrenome: ");
  const anos = parseInt(prompt("Digite seu ano de nascimento (yyyy): "));
  const resultado = anos2 - anos;
  if (isNaN(anos)) {
    console.log("Por favor digite um ano válido!");
    return idade();
  } else if (anos < 1922) {
    console.log("Por favor digite um ano entre 1922 e " + anos2 + "!");
    return idade();
  } else if (anos > anos2) {
    console.log("Por favor digite um ano entre 1922 e " + anos2 + "!");
    return idade();
  } else {
    console.log(nome + " " + sobreNome + " você tem " + resultado + " anos!");
  }
}

/* Desenvolva um código que simule uma eleição com três candidatos.
- candidato_X => 889
- candidato_Y => 847
- candidato_Z => 515
- branco => 0

O código deve perguntar se deseja finalizar a votação depois do voto. Caso o número do voto não corresponda a nenhum candidato ou seja branco,
ele deve ser tratado como nulo. Se for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de votos e, também, a quantidade de votos de cada
candidato, os brancos e nulos.  */

function votacao() {
  //Definindo as variáveis.
  let candidato_X = 0;
  let candidato_Y = 0;
  let candidato_Z = 0;
  let branco = 0;
  let nulo = 0;

  //Criando menu de opções.
  while (true) {
    console.log("\nEleição - Candidatos:");
    console.log("1) Candidato X");
    console.log("2) Candidato Y");
    console.log("3) Candidato Z");
    console.log("0) Voto em branco");
    console.log("-1) Finalizar votação!");

    const voto = parseInt(prompt("Escolha uma opção para votar!"));
    if (voto === -1) {
      break;
    }
    if (isNaN(voto)) {
      console.log(
        "Voto inválido. Digite uma opção válida ou -1 para finalizar a votação!"
      );
      continue;
    }
    //Executando opção escolhida do menu.
    switch (voto) {
      case 1:
        candidato_X++;
        break;
      case 2:
        candidato_Y++;
        break;
      case 3:
        candidato_Z++;
        break;
      case 0:
        branco++;
        break;
      default:
        nulo++;
        break;
    }
  }
  //Imprimindo as informações das votações.
  console.log("\nVotação finalizada!");

  console.log("Resultado da votação: ");
  console.log("Candidato X: " + candidato_X + " votos");
  console.log("Candidato Y: " + candidato_Y + " votos");
  console.log("Candidato Z: " + candidato_Z + " votos");
  console.log("Votos em branco: " + branco);
  console.log("Votos nulos: " + nulo);

  const totalVotos = candidato_X + candidato_Y + candidato_Z + branco + nulo;

  if (totalVotos > 0) {
    if (candidato_X > candidato_Y && candidato_X > candidato_Z) {
      console.log("O candidato X é o vencedor!");
    } else if (candidato_Y > candidato_X && candidato_Y > candidato_Z) {
      console.log("O candidato Y é o vencedor!");
    } else if (candidato_Z > candidato_X && candidato_Z > candidato_Y) {
      console.log("O candidato Z é o vencedor!");
    } else {
      console.log("Houve empate entre os candidatos!");
    }
  } else {
    console.log("Nenhum voto foi registrado!");
  }
}

// Você deve criar três listas em JavaScript:

// 1. para guardar os nomes de dez pessoas;
// 2. para guardar as suas idades;
// 3. para guardar as suas cores favoritas.

// Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade. Ao terminar,
// imprima novamente todas as informações das três listas.

function arrays() {
  let nomes = [
    "Cristiano",
    " Samuel",
    " Suellen",
    " Daniel",
    " Gabrielly",
    " Nataly",
    " Antonio",
    " Cristina",
    " Francisco",
    " Dulce",
  ];
  let idades = [33, 31, 29, 27, 24, 13, 62, 61, 10, 11];
  let cores = [
    "azul",
    " verde",
    " amarelo",
    " cinza",
    " preto",
    " branco",
    " roxo",
    " laranja",
    " vermelho",
    " marrom",
  ];

  idades.splice(0, 0, 34);
  cores.splice(0, 0, "nude");
  console.log("Nome(s): " + nomes);
  console.log("Idade(s): " + idades);
  console.log("Core(s): " + cores);
}

function arrayBi() {
  const animais = [
    ["Leão", "Felino", 8],
    ["Elefante", "Mamífero", 20],
    ["Pinguim", "Ave", 5],
    ["Tubarão", "Peixe", 15],
  ];

  for (let i = 0; i < animais.length; i++) {
    const animal = animais[i];
    console.log("Animal:", animal[0]);
    console.log("Espécie:", animal[1]);
    console.log("Idade:", animal[2] + " anos\n");
  }
}

arrayBi();
