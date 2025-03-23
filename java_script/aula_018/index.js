// Array = Lista de coisas;

const nomes = ['Emanoel', 'Gabriel', 'Adeilton'];
// Uma boa prática de programação é criar arrays ninchados, só strings, somente numeros, etc. Entretanto, o javascript não
// breca de criar listas com dados mistos

// Nome - Idade - Nacimento - Sexo - Casado?
const dadosEmanoel =['Emanoel', 25, '04/04/2000', 'M', true];

// Array são indexados por posição, exemplo: 
// Cada dado no array nomes é uma posição:
/*
    Emanoel - 0 
    Gabriel - 1
    Adeilton - 2
*/
// Com isso conseguimos SELECIONAR, EDITAR, REMOVER, ADICIONAR, ETC.

// IDENTIFICANDO O TIPO DE DADO ARRAY
console.log(typeof nomes);
console.log(nomes instanceof Array);


// FATIAMENTO DE ARRAY:
// nomes.push('Amanda');
// nomes.push('Pedro');

// console.log(nomes.slice(1, 6));
// // console.log(nomes);


// ADICIONANDO UM NOVO VALOR NO COMEÇO DO ARRAY:
// nomes.unshift('Ágatha')


// ADICIONANDO UM VALOR AO FINAL DO ARRAY QUANDO NÃO SABE O SEU TAMANHO:
// nomes.push('Arthur')

// DESCOBRINDO O TAMANHO:
// const tamanho = nomes.length

// ADICIONANDO:
// nomes[tamanho.length] = 'Emanoel'

// EDITANDO:
// nomes[0] = 'Arthur';

// SELECIONANDO UM DADO: 
// let nome = nomes[0];

