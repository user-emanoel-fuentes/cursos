/*OPERADORES LÓGIGOS
&&  AND     E
||  OR      OU
!   NOT     NÃO

Mantém o mesmo comportamento dos operadores de comparação.
*/ 
let comparador = 0

// &&  AND     E
console.log("&&  AND     E");
comparador = true && true;
console.log("true && true", comparador);
comparador = false && true;
console.log("false && true", comparador);
comparador = false && false;
console.log("false && false", comparador);
comparador = true && false;
console.log("true && false", comparador);
console.log();

// ||  OR      OU
console.log("||  OR      OU");
comparador = true || true;
console.log("true || true;", comparador);
comparador = false || true;
console.log("false || true;", comparador);
comparador = false || false;
console.log("false || false;", comparador);
comparador = true || false;
console.log("true || false;", comparador);
console.log()

// !   NOT     NÃO
console.log("!   NOT     NÃO")
comparador = !true;
console.log("!true;", comparador);
comparador = !false;
console.log("!false;", comparador);
console.log();
