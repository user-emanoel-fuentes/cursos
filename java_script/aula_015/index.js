// Dificuldade da imprecisão por conta do IEEE 754 2008

let num1 = 0.7;
let num2 = 0.1;
num1 += num2 // 0.8
num1 += num2 // 0.9
num1 += num2 // 1.0
// console.log(num1); // 0.9999999999999999

// 1º Forma: Multiplicando os valores do calculo por 100 depois dividindo por esse mesmo valor: 
// num1 = ((num1 * 100) + (num2 * 100)) / 100
// num1 = ((num1 * 100) + (num2 * 100)) / 100
// num1 = ((num1 * 100) + (num2 * 100)) / 100
// console.log(num1)

// 2 º Forma: Trabalhando com as funções do JS no resultado final:
// console.log(Number(num1.toFixed(2)))

// Esses dois modelos farão a precisão ser exata.

// toString() -> Altera um dado para string;
// toFixed() -> Define quantidade de casa decimais;
// Number.isInteger(numero) -> Valida se o número dentro do parenteses é inteiro;
// Number.inNaN(valor) -> Retorna verdadeiro se o valor informado for NaN 
// (Geralmente resultado de alguma ação numérica);

