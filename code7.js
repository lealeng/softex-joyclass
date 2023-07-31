const prompt = require("prompt-sync")();

function tabuada() {
    // Solicita ao usuário que digite um número inteiro
    const numero = parseInt(prompt("Digite um número inteiro para ver a sua tabuada: "));

    // Verifica se o valor digitado é um número válido (isNan = para testar se não é um número. Se não for um número válido, uma mensagem de erro é exibida.)
    if (isNaN(numero)) {
        console.log("Por favor, digite um número válido!");
        return tabuada();
    } else {
        //Imprime a tabuada do número digitado
        console.log("Tabuada do " + numero + ":");
    
    // Estrutura de repetição com FOR com validação no início.    
    for (let i = 0; i <= 10; i++) {
        const resultado = numero * i;
        console.log(numero + " x " + i + " = " + resultado);
        
    }
}
    
}

tabuada();