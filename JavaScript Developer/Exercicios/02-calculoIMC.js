let pesoKG = 73;
const alturaCM = 1.59;
let imc = pesoKG / Math.pow(alturaCM, 2); //a biblioteca Math.pow (x,y) é usado para calcular potencia. X é a variavel a ser elevada, e o Y é o numero elevado. Exemplo: 10², x=10 e y=2

if (imc < 18.5) {
    console.log('Seu imc eh: ', imc, 'Você está Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Seu imc eh: ', imc, 'Você está com o Peso Normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Seu imc eh: ', imc, 'Você está Acima do Peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Seu imc eh: ', imc, 'Voce está Obeso');
} else {
    console.log('Seu imc eh: ', imc, 'Voce esta em Obesidade Grave')
}
