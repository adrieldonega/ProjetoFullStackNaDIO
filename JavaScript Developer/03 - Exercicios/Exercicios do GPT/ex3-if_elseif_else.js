/*
    3. If...Else If...Else
    Crie um programa que verifica a idade de uma pessoa e imprime no console:
    "Criança" se tiver menos de 12 anos
    "Adolescente" se tiver entre 12 e 17 anos
    "Adulto" se tiver 18 anos ou mais
*/

const idade = 11;

if (idade < 12) {
    console.log('Criança');
} else if (idade >= 12 && idade <= 17) {
    console.log('Adolescente');
} else { // Para qualquer idade acima de 17
    console.log('Adulto');
}