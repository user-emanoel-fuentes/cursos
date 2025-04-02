/* Operadores de comparação:
>   maior que
>=  maior ou igual
<   menor que
<=  menor ou igual
==  igualdade (checa: valor)
=== igualdade estrita (checa: valor e tipo)
!=  diferente (checa: valor)
!== diferente estrito (checa: valor e tipo)

Sempre que utilizado um operador de comparação o retorno é um dado booleano;
*/
let comparador = 0;

// >   maior que
console.log(">   maior que")
comparador = 10 > 5;
console.log("10 > 5", comparador);


comparador = 5 > 10;
console.log("5 > 10", comparador);
console.log()

// >=  maior ou igual
console.log(">=  maior ou igual")
comparador = 5 >= 5;
console.log("5 >= 5", comparador);

comparador = 5 >= 4;
console.log("5 >= 4", comparador);

comparador = 5 >= 6;
console.log("5 >= 6", comparador);
console.log()

// <   menor que
console.log("<   menor que")
comparador = 5 < 4;
console.log("5 < 4", comparador);

comparador = 5 < 6;
console.log("5 < 6", comparador);
console.log()

// <=  menor ou igual
console.log("<=  menor ou igual")
comparador = 5 <= 4;
console.log("5 <= 4", comparador);

comparador = 5 <= 5;
console.log("5 <= 5", comparador);

comparador = 5 <= 6;
console.log("5 <= 6", comparador);
console.log()

// ==  igualdade (checa: valor)
console.log("==  igualdade (checa: valor)")
comparador = 5 == 6;
console.log("5 == 6", comparador);

comparador = 5 == 5;
console.log("5 == 5", comparador);

comparador = 5 == '5';
console.log("5 == '5'", comparador);
console.log()

// === igualdade estrita (checa: valor e tipo)
console.log("=== igualdade estrita (checa: valor e tipo)")
comparador = 5 === 6;
console.log("5 === 6", comparador);

comparador = 5 === 5;
console.log("5 === 5", comparador);

comparador = 5 === '5';
console.log("5 === '5'", comparador);
console.log()

// !=  diferente (checa: valor)
console.log("!=  diferente (checa: valor)")
comparador = 5 != 6;
console.log("5 != 6", comparador);

comparador = 5 != 5;
console.log("5 != 5", comparador);

comparador = 5 != '6';
console.log("5 != '6'", comparador);
console.log()

// !== diferente estrito (checa: valor e tipo)
console.log("!== diferente estrito (checa: valor e tipo)")
comparador = 5 !== 6;
console.log("5 !== 6", comparador);

comparador = 5 !== 5;
console.log("5 !== 5", comparador);

comparador = 5 !== '6';
console.log("5 !== '6'", comparador);
console.log()