// Exercício: Calculando IMC do Usuário com base nos dados fornecidos;

const nome = 'Emanoel';
const sobreNome = 'Galdino';
const altura = 1.7;
const idade = 25;
const peso = 100.00;
let anoAtual = 2025
let calculoIMC = peso/(altura*altura);
let calculoAnoNascimnto = anoAtual - idade 
console.log(nome, sobreNome, "tem", idade, "anos, pesa", peso, "KG")
console.log("tem", altura, "de altura. Seu IMC é de", calculoIMC)
console.log(` ${nome}  ${sobreNome} nasceu em ${calculoAnoNascimnto}`) // Usando formatação de strings = template strings
