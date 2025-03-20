// Constantes

// Mesma ideia de armazenamento em memória, porém são dados que não sofrem alteração;

// Regras:
// - Não podemos criar constantes com palavras reservadas
// - Precisam ter nome significativos
// - Não podem começar com números
// - Não pode conter espaços ou traços, usar underlines ou cemelCase ex: NomeCompleDoCliente
// - São casesensitive, portanto, letras maiúsculas e minúsculas fazem diferenças
// - não usar let, mas const
// - Não da para iniciar uma const sem atribuir um valor
console.log('Constantes:')
const meuNome = 'Emanoel Galdino Cardoso';
console.log(meuNome);
console.log()


// ex conta:
console.log("Conta:")
const primeiroNum = 5;
const segundoNum = 4;
const calculoSoma = primeiroNum + segundoNum
console.log(calculoSoma);
console.log()

// typeof: Usado para descobrir o tipo de dados que está sendo usado;
console.log("typeof let/const")
let nome = 'Emanoel'
let idade = 24
let temperatura = 120.09
console.log(typeof nome)
console.log(typeof idade)
console.log(typeof temperatura)
