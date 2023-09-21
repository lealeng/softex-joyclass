

class Mouse {
    modelo = 'Logitech G100'
    cor = 'Preto'
    tipo = 'Cabo USB'
    conectado = false

    clicar(){
        if (this.conectado) {
            console.log(`O mouse ${this.modelo} foi clicado`);
        } else {
            console.log(`O mouse ${this.modelo} não pode ser clicado, pois
            não foi conectado`);
        }
    }

    conectar(){
        if (this.conectado) {
            console.log(`O mouse ${this.modelo} já foi conectado`);
        } else {
            this.conectado = true;
        }
    }

    desconectar(){
        this.conectado = false
        console.log(`O mouse ${this.modelo} foi desconectado`);
    }

}

let novoMouse = new Mouse();

// novoMouse.modelo = 'Daniel'
// novoMouse.cor = 'amarelo'
// novoMouse.tipo = 'usb'
// novoMouse.conectado = false

novoMouse.clicar();



