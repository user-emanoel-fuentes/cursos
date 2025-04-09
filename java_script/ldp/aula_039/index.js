// Exercícios de lógica:

// refatorar = fazer melhorias do código;

// 1 - Escreva uma função que recebe dois números e retorna o maior deles. 
    // Resposta:
    function maior(x,y){ return x < y ? y : x }

    // Melhoria (Precisa de uma variável)
    const maior2 = (x,y) => x < y ? y : x 
    
    // console.log(maior2(5,7));

// 2 - Escreva uma função chamada ePaisagem que recebe dois argumentos,
// largura e altura de uma imagem. Retorne "true" se a imagem estiver no modo paisagem.

    function ePaisagem(largura, altura){ return largura > altura }

    const ePaisagem2 = (largura, altura) => largura > altura;

    // console.log(ePaisagem2(1080, 1920));
    // console.log(ePaisagem2(1920, 1080));

// 3 - Escreva uma função que recebe um número e retorne o seguinte:
// Checa se realmente é um número
// Limitado a números de 0 a 100;
// Divisível por 5? Buzz
// Divisível por 3? Fizz
// Divisível por 3 e 5? FizzBuzz
// Não divisível por 3 e 5 retorna número

// Minha resposta:
function fizzBuzz(n) {
    if (typeof(n) === "number") {
        if (0 === n % 5) {
            if (0 === n % 3) { return "FizzBuzz" }
            return "Buzz"
        } else if (0 === n % 3) { return "Fizz" }
        return n   
    }
    return n    
}

// Resposta Aula:
function fizzBuzz2(n){
    if (typeof n !== "number") return n;
    if (n % 3 == 0 & n % 5 == 0) return "FizzBuzz";
    if (n % 3 == 0) return "Fizz";
    if (n % 5 == 0) return "Buzz";
    return n;
}

for (let i=0; i <=100; i++) {
    console.log(i, fizzBuzz(i));
    console.log(i, fizzBuzz2(i));
}
