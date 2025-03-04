
const adriel = {
    nome: 'Adriel Donega',
    idade: 37,

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
};

//se alterar o dado do objeto, o método descrever() irá exibir o dado atualizado, exemplo:
adriel.nome = 'Adriel Donega de Donegá';
adriel.idade = 38;


//posso trazer uma função dentro de um objeto alterado, exemplo:
adriel.descrever = function () {
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
}

adriel.descrever();
