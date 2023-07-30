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

aprovacaoAluno();
