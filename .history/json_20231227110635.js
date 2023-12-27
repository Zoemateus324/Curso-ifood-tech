class formaDeBolo {
    constructor(saborDaMassa, saborRecheio) {
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever() {
        console.log(`Um delicioso bolo de ${this.saborDaMassa} e com um delicioso ${this.saborRecheio}`)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "recheio de nutella")