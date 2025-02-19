//forma de pagamento:
//1 - Debito = 10%off
//2 - Dinheiro ou Pix = 15%off
//3 - Parcelado 2x = Preco Etiqueta sem juros
//4 - Acima de 2x = Preco Etiqueta + 10% de juros

const precoEtiqueta = 100;
const formaPagamento = 4;


if (formaPagamento === 1) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
} else if (formaPagamento === 3) {
    console.log(precoEtiqueta);
} else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));    
}