// FUNÇÃO: Trazendo a definição mais simples, uma função é a execução de uma ação (script), mediante acionamento, contendo argumentos ou não.

// SINTAX:
// function nomeDaFunção(Parâmetros, se necessário) {
//  script...
//  return valor... 
// }

// nomeDaFunção(); -> Método de acionamento da função.
 
function saldacao(nome) {
    return `Olá, Seja bem-vindo ${nome}.`;
}

const variavel = saldacao("Emanoel");
// console.log(variavel);

// Ex 2: Subtraindo  2 do retorno de uma função soma:
function soma(x, y) {
    return Number(x + y);
}

let resultado = soma(5, 4) - 2;
// console.log(resultado); // resultado = 7 

// Podemos atribuir valores padrões aos parâmetros ():
function subtracao(x=0, y=0) {
    const resultado = x - y;
    return resultado;
}
// desta forma, é possível executar a função sem passar nenhum valor e obter um resultado que não seja NaN;
// console.log(subtracao());

// funções anonimas:
const raiz = function (n) {
    return n ** (1/2)
};
// console.log(raiz(25));

// arrow function (método mais recente de funções anonimas)
const raizQuadrada = x => x ** 0.5;
console.log(raizQuadrada(9))