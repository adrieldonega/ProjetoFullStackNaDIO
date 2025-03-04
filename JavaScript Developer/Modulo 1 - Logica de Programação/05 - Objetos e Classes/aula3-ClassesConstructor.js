class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}


const adriel = new Pessoa('Adriel Donegá', 37);
const natalia = new Pessoa('Natália Donegá', 36);

console.log(adriel);
console.log(natalia);

