// Operadores ternários são expressões condicionais limitadas a dois possíveis retornos, utilizados principalmente na atribuição de variáveis;

// Exemplo: console informa se o jogador é vip baseado em seu nível (VIP a partir do lvl 100);

const lvl = 99;
const statusVip = lvl > 100 ? "Jogador VIP" : "Jogador Normal!";
console.log(statusVip); 

/*
    ? Sinal utilizado para caso o valor seja verdadeiro;
    : Sinal utilizado para caso o valor seja falso;

    variável = condição ? valor_true : valor_false;
*/


// Exemplo: Usar cor padrão caso não tenha sido definido pelo usuário;
const userColor = "blue";
const defaultColor = userColor || "black";
console.log(defaultColor); // blue