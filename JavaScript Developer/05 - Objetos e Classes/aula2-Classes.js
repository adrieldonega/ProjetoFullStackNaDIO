class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


const adriel = new Pessoa();
adriel.nome = 'Adriel Donega';
adriel.idade = 37;

const natalia = new Pessoa();
natalia.nome = 'Natália Lis Camargos Donegá';
natalia.idade = 36;

const brian = new Pessoa();
brian.nome = 'Brian Camargos Donega';
brian.idade = 11;

const maria = new Pessoa();
maria.nome = 'Maria Luiza Camargos Donega';
maria.idade = 9;

console.log(adriel);
console.log(natalia);
console.log(brian);
console.log(maria);

adriel.descrever();
natalia.descrever();
brian.descrever();
maria.descrever();
