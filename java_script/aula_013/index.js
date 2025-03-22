let umaString = 'EU ESTOU COMEÇANDO EM JAVASCRIPT';
// console.log(umaString);;

// strings são indexsáveis:
/*
        E  M  A  N  O  E  L
        0  1  2  3  4  5  6 --> 
*/

console.log(umaString[0]);

// Função p/ strings que retorna o valor de um determinado indice:
console.log(umaString.charAt(3));

// Função p/ string de concatenação:
console.log(umaString.concat(' GALDINO', ' CARDOSO'));

// Função que procura o indice de um texto específico da esquerda para direita:
console.log(umaString.indexOf('L')); // Se -1, nada foi encontrado.
console.log(umaString.indexOf('E', 2)); // Procurando a letra E a partir do indice 2, ignorando a primeira letra da posição 0

// Pesquisa do final para o começo: (Esse tipo de pesquisa pode otimizar o consumo da máquina quando sabemos
// que os valores estão mais perto do  final).
console.log(umaString.lastIndexOf('L'));

// Função que procura um dado baseado em expressão regular (mach = retorna um grupo de dados que se enquadram na expreção), 
// (search = retorna o indice do valor encontrado da expressão regular)
// (replace = substitui o texto por outra coisa)

console.log(umaString.replace('E', 'Y')); // é possível usar expressão regular para melhorar o replace.

// Função que consulta o tamanho da string:
console.log(umaString.length);

// Função que pegar um pedaço da string:
console.log(umaString.slice(1,5));

// Função que divide uma string em um caractere específico:
console.log(umaString.split(' '));

// Função que coloca a string com letras maiúsculas:
console.log(umaString.toUpperCase());

// Função que coloca a string com letras minúsculas:
console.log(umaString.toLowerCase());


