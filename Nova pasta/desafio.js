/*Desafio imprimir um calculo matemático em Js*/
let carplay = 10 * 10 * 25;
console.log(carplay)
    /*Desafio imprimir um calculo matemático em Js*/
const precoCombustivel = 5.79;
const kmPorLitro = 10;
const distanciakm = 1050;
const gastoViagem = distanciakm * kmPorLitro;
const despesaViagem = kmPorLitro * precoCombustivel;
console.log(despesaViagem.toFixed(2))
    /*Desafio calcular preço de viagem variaveis e operadores*/
    /*Estruturas condicionais */
const numero = 11;
const eNumeroPar = (numero % 2) === 0; /*Variaveis boolean*/
console.log(eNumeroPar)
    /*Condicionais*/
const numero = 10;
const eNumeroPar = (numero % 2) === 0;

if (eNumeroPar) {
    console.log('globo!');
}
if (!eNumeroPar) {
    console.log('Sou foda Porra!');
}



console.log(eNumeroPar)
    /**/
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel1 = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

if (tipoCombustivel1 === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

/*Calculando média*/
const nota1 = 7;
const nota2 = 1;
const nota3 = 1;
const media = (nota1 + nota2 + nota3) / 3;



if (media < 5) {
    console.log('Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Recuperação');
} else {
    console.log('Aprovado');

}

/*Calculando peso em javascript */
const altura = 1.69;
const peso = 79;

const imc = peso / Math.pow(altura, 2)


if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc <= 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc <= 30) {
    console.log('Acima do peso');
} else if (imc >= 30 && imc <= 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade grave')
}