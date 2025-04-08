/* JS: (Arrays) Atribuição via desestruturação:

DEFINIÇÃO: 
    A atribuição via desestruturação é uma sintaxe do JavaScript que permite atribuir propriedades de objetos ou itens de arrays a variáveis.

COMO FUNCIONA: 
    Desempacota valores de arrays ou propriedades de objetos em variáveis distintas
    Permite mapear instantaneamente um objeto ou matriz em muitas variáveis
    Permite extrair dados de matrizes/objetos aninhados
    Permite atribuir valores default
    Permite trocar valores entre duas variáveis
    Permite pular alguns itens do array
    Permite clonar array

VANTAGENS:
    Reduz o número de linhas de código necessárias para manipular dados 
    Evita a necessidade de acessar repetidamente as propriedades do objeto 
    É bastante usada ao se trabalhar com props no React 
*/

// EXEMPLOS:

// ARRAYS:
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [um, dois, , quatro, , seis, ...rest] = numeros;

// desempacotando um número
// console.log(um); 
// console.log(dois); 

// desempacotando um número fora da sequência
// console.log(quatro);
// console.log(seis);

// desempacotando o resto em um novo array
// console.log(rest);

const maisNumeros = [[10, 20, 30], [40, 50, 60], [70, 80, 90]];

// obtendo o valor de um array que está dentro de outro:
const [[ ,vinte, ],[quarenta,,],[,,noventa]] = maisNumeros;

// console.log(vinte);
// console.log(quarenta);
// console.log(noventa);
//OBS: Método possível porém, pouco recomendável devido a dificuldade de interpretação.


// OBJETOS:
const pessoa = {
    nome : "Luiz",
    sobrenome : "Otávio",
    ultimoNome : "Miranda",
    sexo : "M",
    profissao : "Desenvolvedor",
    idade : 37,
    endereco : {
        rua : "Av Brazil",
        numero : "320"
    }, 
    casado : true,
    filhos : false,
    empreendedor : true,

};


// Atribuição via Desestruturação:
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// Definindo valores padrões:
// OBS: No caso deste atributo não estar preenchido, o valor passa a ser o padrão.
const { sexo, profissao="Desempregado"} = pessoa;
console.log(sexo, profissao);

// Atribuindo um nome diferente da chave:
const { idade : tempoDeVida } = pessoa;
console.log(tempoDeVida);

// Obtendo os valores de um objeto dentro de outro objeto:
const { endereco : { rua : r, numero }, endereco } = pessoa;
console.log(r, numero, endereco);

// Obtendo o resto:
const { ultimoNome : un, ...resto } = pessoa;
console.log(un, resto)