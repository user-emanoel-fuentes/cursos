// JS: Laços de repetição (For in):

const frutas = ["Melância", "Pera", "Abacate", "Maçã", "Uva"]

// Tradicional: Passea por meio de um contador 
for (let i = 0; i < frutas.length; i++) {
    // console.log(frutas[i]);
}

// For in: Passea lendo os indices ou chaves do array/objeto;
for (let i in frutas) {
//     console.log(i, frutas[i]);
}

const pessoa = {
    nome:"Nicolas",
    sobrenome:"Alves",
    idade:28,
    sexo:"M",
    endereço:{
        rua:"Av Lorenço",
        numero:789,
    },
}

for (let key in pessoa) {
    // console.log(key, pessoa[key]);
}

// for of: Não funciona para objetos, somente arrays/vetores
const nome = "Luiz Otávio"
for (let valor of nome) {
    console.log(valor);
}

// forEach()
frutas.forEach(function(valor, indice, array){
    console.log(valor, indice, array);
});

// for clássico : Geralmente com iteráveis (array, strings)
// for in : Retorna indice ou valor (string, array, objeto)
// for of : Retorna valor (iteráveis, strings ou array)