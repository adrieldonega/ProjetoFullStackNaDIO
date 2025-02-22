/*  Crie uma classe para representar carros.
    Os carros possuem uma marca, uma cor e um gasto medio de combustivel por Kilometro rodado.
    Crie um metodo que dado a quantidade de quilometros e o preço do combustivel nos de o valor gasto em reais para realizar este percurso.
*/

//Criando a classe Carro
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Vermelho', 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'Azul', 1 / 10);
console.log(palio.calcularGastoDePercurso(70, 5));
