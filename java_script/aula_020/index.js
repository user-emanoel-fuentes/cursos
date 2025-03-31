// OBJETO: 
// Podemos fazer uma analogia do objeto á um documento de identidade, possui um grupo de informações diferentes relacionadas a uma pessoa. 

const pessoa1 = {
    nome:"João",
    sobrenome:"Alfonso",
    idade:35,
};

// console.log(pessoa1.nome);
// console.log(pessoa1.sobrenome);
// console.log(pessoa1.idade);

// function criarPessoa(nome, sobrenome, idade) {
//     return {
//         nome: nome,
//         sobrenome: sobrenome,
//         idade: idade,
//     };
// }

// Quando o atributo vai ter o mesmo nome que o parâmetro, podemos simplificar a sintax que o motor do javascript já interpreta e ajusta para montrar o objeto corretamente. 
function criarPessoa(nome, sobrenome, idade) {
    return {nome, sobrenome, idade,};
}
// console.log(criarPessoa("Gabriel", "Jesus", 27))

// Podemos adicionar funções aos objetos:
const pessoa = {
    nome:"Jílio",
    sobrenome: "Belline",

    nomeCompleto () {
        return `${this.nome} ${this.sobrenome}` // this = este objeto
    }
}
console.log(pessoa.nomeCompleto());