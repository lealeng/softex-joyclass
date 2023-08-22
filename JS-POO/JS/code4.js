function cadastroPessoas() {
  const nome = "Cabeça";
  let salario = 10000;
  const idade = 35;
  let diploma = false;

  console.log("Aqui estão seus dados pessoais.");
  console.log(`Nome: ${nome}`);
  console.log(`Salário: ${salario}`);
  console.log(`Idade: ${idade}`);

  if (diploma == true) {
    console.log(`Você tem um diploma, parabéns!`);
  } else {
    console.log(`Meu filho, faça o curso da SOFTEX!`);
  }
}

cadastroPessoas();
