
/*
    Uma sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 - 100.
    Faça um programa que receba os 5 numeros sorteados  para os alunos e mostre o maior numero sorteado.

    Dados de entrada: 
    5
    50
    10
    98
    23


    saida:
    98
*/

const { gets, print } = require('./13a-funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);    
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print (maiorValor);