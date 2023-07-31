const prompt = require("prompt-sync")();

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

contagem();
