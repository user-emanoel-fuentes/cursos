// EXTRUTURA CONDICIONAL: IF, ELSE IF, ELSE:

const hora = 12;

if (hora >= 0 && hora <= 11) {
    console.log("Bom Dia!");
} else if (hora >= 12 && hora <= 17) {
    console.log("Boa Tarde!");
} else if (hora >= 18 && hora <= 23) {
    console.log("Boa noite!");
} else {
    console.log("Olá!")
}

/*    
if (condition1) {
    script1
} else if (condition2) {
    script2
} else {
    script3
}
OBS: tanto em if ou else if, para que o script seja rodado, precisa ser verdadeiro. No caso de nada ser verdadeiro, o script else é executado. As condições são
verificadas em sequência, portanto, a condição que primeiro for atendida, será executada e saltado o bloco condicional, por isso, é importante analisar a sequência
de verificação.
*/

