// Faça um programa para calcular o valor de uma viagem
// Voce terá 3 variaveis. Sendo elas:
// 1 - Preço do combustivel
// 2 - Gasto medio de combustivel do carro por KM
// 3 - Distância em KM da viagem;

// Imprima no console o valor que será gasto para realizar esta viagem.

const precoCombustivel = 6.00;
const gastoMedioKM = 10;
const distanciaKM = 300;

let litrosNecessarios = distanciaKM / gastoMedioKM;
let gastoViagem = litrosNecessarios * precoCombustivel;

// .tofixed converte o valor em texto e o (2) exibe duas casas decimais.
console.log(gastoViagem.toFixed(2));
