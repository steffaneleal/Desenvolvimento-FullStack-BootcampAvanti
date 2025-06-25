console.log('Hello World');

// DECLARAÇÃO DE VARIÁVEIS
console.log('--------------- DECLARAÇÃO DE VARIÁVEIS ---------------');
let multiplicacao = 4 * 3;
console.log(`Multiplicação: ${multiplicacao}`);




// CONDICIONAIS - IF/ELSE
console.log('\n\n--------------- CONDICIONAIS - IF/ELSE ---------------');
let nota = 7;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota < 7 && nota >= 4) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}




// CONDICIONAIS - SWITCH CASE
console.log('\n\n--------------- CONDICIONAIS - SWITCH CASE ---------------');

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
console.log('\n\n--------------- WHILE ---------------');
let count = 1;

while (count <= 4) {
    console.log(`Executando ${count}`);
    count++;
}



// LAÇO DE REPETIÇÃO - FOR
console.log('\n\n--------------- FOR ---------------');

for (let i = 0; i <= 4; i++) {
    console.log(`Executando `,i);
}

// FUNÇÃO
console.log('\n\n--------------- FUNÇÃO ---------------');
function soma(n1, n2) {
    let soma = n1 + n2;
    console.log('Soma: ', soma);
}




soma(2, 4);

// OBJETO
console.log('\n\n--------------- OBJETO ---------------');

let pessoa = {
    nome: 'Steffane',
    sobrenome: 'Leal'
}

console.log('Nome:', pessoa.nome + ' ' + pessoa.sobrenome);




console.log('\n\n--------------- ARRAY ---------------');
let animais = ['leão', 'tubarão', 'cachorro'];
for (let i = 0; i < animais.length; i++) {
    console.log(`Animal ${i}`, animais[i]);
}

//------------------------------------------------------------------
console.log('\npush() -> empurra um novo atributo dentro do array')
animais.push('papagaio'); // empurra um novo atributo dentro do array
for (let i = 0; i < animais.length; i++) {
    console.log(`Animal ${i}`, animais[i]);
}

//------------------------------------------------------------------
console.log('\npop() -> remove o último atributo dentro do array');

animais.pop(); // remove o último atributo dentro do array
for (let i = 0; i < animais.length; i++) {
    console.log(`Animal ${i}`, animais[i]);
}

//------------------------------------------------------------------
console.log('\nshift() -> remove o primeiro atributo do array');  // remove o primeiro atributo do array

animais.push('arara');
animais.shift();
for(let i = 0; i < animais.length; i++) {
    console.log(`Animal ${i}`, animais[i]);
}

//------------------------------------------------------------------
console.log('\nsplice() -> remove um atributo de qualquer lugar'); // remove um atributo de qualquer lugar

animais.splice(2);
for(let i = 0; i < animais.length; i++) {
    console.log(`Animal ${i}`, animais[i]);
}
