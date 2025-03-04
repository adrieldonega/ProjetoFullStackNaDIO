//Colocacr todo o codigo acima dentro de uma função chamada main 


function calcularQuadrado(valor) {
    return valor * valor;
}

function main() {
    console.log('Programa Principal');
    calcularQuadrado(5);
    console.log('Testando função com retorno: ' + calcularQuadrado(5));
}

main();