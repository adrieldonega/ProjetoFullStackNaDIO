

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {

    if (imc < 18.5) {
        return 'Seu imc eh: ', imc, 'Você está Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Seu imc eh: ', imc, 'Você está com o Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Seu imc eh: ', imc, 'Você está Acima do Peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Seu imc eh: ', imc, 'Voce está Obeso';
    } else {
        return 'Seu imc eh: ', imc, 'Voce esta em Obesidade Grave';
    }
}

function main(){
    const peso = 75;
    const altura = 1.75;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();






