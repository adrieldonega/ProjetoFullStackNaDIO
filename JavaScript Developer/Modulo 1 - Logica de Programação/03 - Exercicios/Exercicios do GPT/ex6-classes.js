/*
    Classes (Básico)
    Crie uma classe chamada Pessoa que tenha as propriedades:

    nome
    idade

    Depois, crie um objeto dessa classe e exiba os dados no console.

*/

class Pessoa{
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

const adriel = new Pessoa();
adriel.nome = 'Adriel Donega';
adriel.idade = 37;

adriel.descrever();