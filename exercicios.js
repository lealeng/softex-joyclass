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


