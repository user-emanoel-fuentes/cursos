// Alterando os valores das variáveis sem atribuição de valor, apenas de variável.

let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// let varD = varA;

// varA = varB;
// varB = varC;
// varC = varD;

[varA, varB, varC] = [varB, varC, varA]
console.log(varA, varB, varC);
