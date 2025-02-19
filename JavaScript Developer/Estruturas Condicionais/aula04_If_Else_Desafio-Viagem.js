const precoEtanol = 3.99;
const precoGasolina = 5.69;
let   tipoCombustivel = 'gasolina'; //ou etanol
const gastoPorKM = 10;
const distanciaKmTotal = 300;


let litrosNecessarios = distanciaKmTotal / gastoPorKM;

if(tipoCombustivel === 'gasolina'){
    const valorGasto = litrosNecessarios * precoGasolina;
    console.log(valorGasto.toFixed(2));
}else if (tipoCombustivel === 'etanol'){
    let valorGasto = litrosNecessarios * precoEtanol;
    console.log(valorGasto.toFixed(2));
}else{
    console.log('Seu carro é Diesel ou você não tem um carro!')
}
