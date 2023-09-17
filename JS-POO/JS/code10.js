function Banco(conta, saldo, tipoConta, agencia) {
    this.conta = conta
    this.saldo = saldo
    this.tipoConta = tipoConta
    this.agencia = agencia

    this.getSaldo = function(){
        return this.saldo;
    }

    this.postDepositar = function (deposito) {
        this.saldo += deposito
    }

    this.putSacar = function (saque) {
        this.saldo -= saque
    }

    this.getConta = function () {
        return this.conta;s
    }
}

const minhaConta = new Banco(1425, 100, "Conta-Corrente", 147258 );

console.log(`Saldo atual da conta ${minhaConta.getConta()} é: R$ ${minhaConta.getSaldo()}`);

minhaConta.postDepositar(150)
console.log(`Novo saldo após o deposito: R$ ${minhaConta.getSaldo()}`);

minhaConta.putSacar(50)
console.log(`Saldo após o saque: R$ ${minhaConta.getSaldo()}`);
