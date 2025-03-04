/*
    Faça um programa que receba N (quantidade de numeros) e seus respectivos valores
    Imprima o maior numero Par e o menor numero impar

    Exemplo:
        Entrada:
            5
            3
            4
            1
            10
            8
        Saida:
            Maior Numero Par: 10
            Menor Numero Impar: 1
*/

const { gets, print } = require('./funcao-auxiliar-maiorNumeroPar');

const n = gets();
let maiorNumeroPar = null;
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets();

    if (numero % 2 === 0) {
        if (maiorNumeroPar === null || numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar) {
            menorNumeroImpar = numero;
        }
    }
}

print('O maior numero par é: ' + maiorNumeroPar);
print('O menor numero par é: ' + menorNumeroImpar);
