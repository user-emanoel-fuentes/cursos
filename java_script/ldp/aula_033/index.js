// JS: Estrutura de Repetição (FOR/PARA)
/*
DEFINIÇÃO:
    A estruturas de repetição for são loops que repetem um bloco de código várias vezes, de acordo com uma condição. São muito usadas para manipular dados, iterar sobre arrays, ou executar tarefas repetitivas

VANTAGENS:
    São ferramentas básicas e poderosas para qualquer programador JavaScript.
    Permitem escrever códigos eficientes e organizados.
    Simplificam a repetição de tarefas e a manipulação de conjuntos de dados.

CONSIDERAÇÕES:
    Em muitos projetos, é melhor evitar o uso de laços for em grandes estruturas de dados, pois eles se tornam lentos e improdutivos. 
*/

// EXEMPLO:

for (let i = 0; i <= 5; i++) {
    console.log(`Linha ${i}`);
}

// SINTAX:
/*
for (expressão inicial; condição; incremento) {
    script...
}
*/

// Descobrindo valores pares:
for (let i=0; i <=10; i++){
    const valor = i % 2 === 0 ? "Par" : "Impar";
    console.log(`${i} ${valor}`);
}

// Passeando por cada nome de um array:
const nomes = ["Emanoel", "Luiz", "Lucas", "Afonso", "Daniel", "Pedro", "Matheus"]
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}

//Contador regressivo:
for (let i = 10; i >= 0; i--) {
    console.log(i);
} 