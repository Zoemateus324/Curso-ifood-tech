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