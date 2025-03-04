/*
1) Faça um programa que receba a media de um aluno.
Caso a media seja < 5 imprima "Reprovado"
Caso a media seja >= 5 e < 7 imprima "Recuperação"
Caso a media seja >= 7 imprima "Aprovado"

Exemplo:
    Entrada: 
        5.5
    Saida:
        Recuperação
*/

const { gets, print } = require('./funcao-auxiliar-calculoMedia');

const media = gets();

if (media < 5) {
    print('Reprovado') ;
} else if (media >= 5 && media < 7) {
    print('Recuperação');
} else {
    print('Aprovado');
}