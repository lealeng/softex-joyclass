const prompt = require("prompt-sync")();

function calcNotaMedia() {
  console.log(
    `Por favor insira três notas entre 0 e 10 para a calcular a média.`
  );
  let nota1 = parseInt(prompt(`Digite a primeira nota: `));
  let nota2 = parseInt(prompt(`Digite a segunda nota: `));
  let nota3 = parseInt(prompt(`Digite a terceira nota: `));
  let media = (nota1 + nota2 + nota3) / 3;

  
  console.log(`Agora iremos calcular a média das três notas inseridas.`);

  let res = media < 7? 'REPROVADO' : 'APROVADO'

  console.log(`A sua média é: ${media} - ${res}`);
}

function calcNotaMedia2() {
    console.log(
        `Por favor insira duas notas entre 0 e 10 para a saber a nota mínima que deve tirar na próxima prova para ser aprovado com nota 7.`
      );
      let nota1 = parseInt(prompt(`Digite a primeira nota: `));
      let nota2 = parseInt(prompt(`Digite a segunda nota: `));
      let media = 7
      let nota3 = ((media * 3) - nota1 - nota2)
      
    
      console.log(`Agora iremos calcular a nota mínima para ser aprovado:\n${nota3}`);

}
calcNotaMedia();
calcNotaMedia2();