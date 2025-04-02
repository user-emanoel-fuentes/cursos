// Variáveis:
// São espaços de memórias da máquina que recebe um determinado valor temporáriamente.

// Ex. Nome:
// Sempre utilizar 'let' para declarar variáveis que variam;

let nome = 'Emanoel Galdino'; // String

// Exemplo de uso:
console.log('Olá, meu nome é', nome);


// É possível declarar uma variável sem atrelar um valor nela, por padrão ela rece "underfined":
let idade;
console.log(idade);
idade = 25; // atrelando um valor na variável
console.log(idade);
idade = 20; // novo valor para variável

// Uma vez que uma variável já foi declarada, não podemos usar novamente o 'let' para esta variável o motor entenderá que você tentou criar duas
// variáveis com o mesmo nome;

// Regras para variáveis:

/* 

- Não podemos criar variáveis com palavras reservadas
- Precisam ter nome significativos
- Não podem começar com números
- Não pode conter espaços ou traços, usar underlines ou cemelCase ex: nomeCompleDoCliente
- São casesensitive, portanto, letras maiúsculas e minúsculas fazem diferenças
*/