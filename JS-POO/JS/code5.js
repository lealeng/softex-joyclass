const prompt = require("prompt-sync")();

function calcMedia() {
  console.log(
    `Por favor insira três notas entre 0 e 10 para a calculadora realizar a média.`
  );
  let nota1 = parseInt(prompt(`Digite a primeira nota: `));
  let nota2 = parseInt(prompt(`Digite a segunda nota: `));
  let nota3 = parseInt(prompt(`Digite a terceira nota: `));
  let media = (nota1 + nota2 + nota3) / 3;

  console.log(`Agora iremos calcular a média das três notas inseridas.`);

  console.log(`A sua média é: ${media}`);
}

calcMedia();
