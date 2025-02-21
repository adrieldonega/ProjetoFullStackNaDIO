
//testando as funções
function teste() {
    console.log('Testando as Funções');
}

teste();
//==================================================

//função com parâmetro
function sayMyName(name) {
    console.log('Função com: ' + name);
}

sayMyName('Parametro');

//==================================================

//função com retorno
function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log('Testando função com retorno: ' + quadradoDeDez);

//==================================================

//função IncrementarJuros
function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log('Testando função Incrementar Juros +10%: ' + incrementarJuros(100, 10));
console.log('Testando função Incrementar Juros +15%: ' + incrementarJuros(100, 15));
console.log('Testando função Incrementar Juros +20%: ' + incrementarJuros(100, 20));
