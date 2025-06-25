console.log('Hello World');

// DECLARAÇÃO DE VARIÁVEIS
console.log('--------------- DECLARAÇÃO DE VARIÁVEIS ---------------');
let multiplicacao = 4 * 3;
console.log(`Multiplicação: ${multiplicacao}`);

// CONDICIONAIS - IF/ELSE
console.log('--------------- CONDICIONAIS - IF/ELSE ---------------');
let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota < 7 && nota >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

// CONDICIONAIS - SWITCH CASE
console.log('--------------- CONDICIONAIS - SWITCH CASE ---------------');

let dia = 'sabado';

switch(dia) {
    case 'segunda': 
        console.log('SEGUNDA');
        break;
    case 'terca':
        console.log('TERÇA');
        break;
    case 'quarta':
        console.log('QUARTA');
        break;
    case 'quinta':
        console.log('QUINTA');
        break;
    case 'sexta':
        console.log('SEXTA');
        break;
    case 'sabado' || 'domingo':
        console.log('OBA! FIM DE SEMANA!');
        break;
    default: 
        console.log('VALOR INVÁLIDO');
        break;

}

// LAÇO DE REPETIÇÃO - WHILE
console.log('--------------- LAÇO DE REPETIÇÃO ---------------');
let count = 1;

while (count <= 4) {
    console.log(`Executando ${count}`);
    count++;
}

console.log('--------------- REPETIÇÃO ---------------');

// LAÇO DE REPETIÇÃO - FOR
for (let i = 0; i <= 4; i++) {
    console.log(`Executando `,i);
}

// FUNÇÃO
console.log('--------------- FUNÇÃO ---------------');
function soma(n1, n2) {
    let soma = n1 + n2;
    console.log('Soma: ', soma);
}

soma(2, 4);

// OBJETO
console.log('--------------- OBJETO ---------------');

let pessoa = {
    nome: 'Steffane',
    sobrenome: 'Leal'
}

console.log('Nome:', pessoa.nome + ' ' + pessoa.sobrenome);

console.log('--------------- OBJETO - ARRAY');
let animais = ['leão', 'tubarão', 'cachorro'];
animais.push('papagaio'); //empurra um novo atributo dentro do array
console.log('Animal 2: ', animais[1]);
console.log('Animal 4: ', animais[3]);

animais.pop(); // remove o último atributo dentro do array
animais.shift(); // remove o primeiro atributo do array
animais.splice(3); //remove um atributo de qualquer lugar
console.log('Animal 2: ', animais[1]);
console.log('Animal 4: ', animais[3]);
