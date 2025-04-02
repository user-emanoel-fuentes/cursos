// AVALIAÇÃO DE CURTO CIRCUITO
// Se baseia em parar o processamento da operação ao identificar que ela é false antes de finalizar (utilizando &&, por exemplo);

// OPERADORES LÓGICOS: && (Tudo precisa ser verdadeiro para true), || (Precisa de algum valor verdadeiro para true);
// OBS: Tudo pode ser avaliado;

/*
FALSY: Valores que fingem ser falso

0
"", '', ``
null
undefined
NaN

Obs: o 'false' é um valor falso literal
*/

/*
Numa checagem de valores com o operador &&, se true o motor retorna o último valor avaliado.
Numa checagem de valores com o operador ||, ele retorna o primeiro valor verdadeiro.

Isso acontece por conta da avaliação de curto circuito.
*/
// Exemplo:
console.log("Emanoel" && true && "João"); // Tudo 'True' = retorna "João"
console.log("Emanoel" || true || "João"); // Tudo 'True' = retorna "Emanoel"
console.log(0 || false || "" || undefined || "Emanoel"); // Um 'True' = retorna "Emanoel"
console.log(0 || "João" || "" || undefined || "Emanoel"); // Um 'True' = retorna "João"
