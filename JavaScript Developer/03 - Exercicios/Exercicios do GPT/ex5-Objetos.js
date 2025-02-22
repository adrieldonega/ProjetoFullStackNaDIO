/*
    Objetos (Básico)
    Crie um objeto chamado carro com as propriedades:

        marca
        modelo
        ano

    Depois, exiba no console uma frase como:
    "Meu carro é um [marca] [modelo] do ano [ano]."
*/

const carro = {
    marca: "",
    modelo: "",
    cor: "",
    ano: 0,

    descrever: function(){
        console.log(`Meu carro é uma ${this.marca} ${this.modelo} ${this.cor} ${this.ano}`);
    }
}

carro.marca = 'Honda';
carro.modelo = 'Fit';
carro.cor = 'Prata';
carro.ano = 2008

carro.descrever();


