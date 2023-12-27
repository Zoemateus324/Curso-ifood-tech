class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("chocolate", "doce de leite")

let boloPremium = new formaDeBolo("Bauinlha", "morango")

boloFesta.escrever()
boloPremium.escrever()



// Definindo a classe Heroi
class Heroi {
    // Construtor da classe
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque;

        // Determinando o tipo de ataque com base no tipo do herói
        switch (this.tipo) {
            case 'mago':
                ataque = 'usou magia';
                break;
            case 'guerreiro':
                ataque = 'usou espada';
                break;
            case 'monge':
                ataque = 'usou artes marciais';
                break;
            case 'ninja':
                ataque = 'usou shuriken';
                break;
            default:
                ataque = 'usou um ataque desconhecido';
        }

        // Exibindo a mensagem de ataque
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso da classe Heroi
const heroi1 = new Heroi('Herói1', 25, 'mago');
const heroi2 = new Heroi('Herói2', 30, 'guerreiro');

heroi1.atacar(); // Saída: O mago Herói1 atacou usando magia
heroi2.atacar(); // Saída: O guerreiro Herói2 atacou usando espada