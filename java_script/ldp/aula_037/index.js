// JS: Laço de repetição While e Do While: 
// Laço de repetição que não sabemos quantas vezes o script terá de repetir;

// const nome = "Luiz Miranda" 
// let contador = 0;

// Iterando sobre condição:
// while (contador <=10) {
    // console.log(contador);
    // contador ++
// }

// Iterando sobre indices:
// while (contador < nome.length) {
//     console.log(nome[contador]);
//     contador ++
// }
// Nesses casos o melhor recomendado é o laço for.

function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max)
let cont = 0
while (rand !== 10) {
    rand = random(min, max);
    
    console.log(rand);
    
    cont ++
}
// console.log("Contado:", cont);

do {
    rand = random(min, max);
    console.log(rand);
    cont ++
} while (rand !== 10);

console.log("Contado:", cont);



// while : Executa um script mediante uma condição
// do while : Executa o script e depois checa a condição 