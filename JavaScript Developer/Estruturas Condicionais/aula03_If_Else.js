const numero = 0;

numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0){
    console.log('O número é invalido');
}else if (numeroDivisivelPor5){
    console.log('SIM');
}else{
    console.log('NÃO')
}