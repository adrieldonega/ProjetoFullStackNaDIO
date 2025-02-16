const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('Sua media foi: ', media, ', Reprovado');
} else if (media >= 5 && media <= 7) {
    console.log('Sua media foi: ', media, ', Recuperação');
} else {
    console.log('Sua media foi: ', media, ', Passou de semestre');
}

