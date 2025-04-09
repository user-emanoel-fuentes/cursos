// JS: Break e Continue
// São comandos adicionados ao laços para travar ou continuar a condição, para disponibilizar ao dev mais controle.

const numeros = [100, 200, 300, 400, 500, 600, 700, 800, 900]

for (let numero of numeros) {
    
    if (numero === 200) {
        console.log();
        continue
    }
    
    if (numero === 700) {
        console.log("Trava Encontrada! 700")
        break
    }
    console.log(numero);
}
console.log("fim do código");

// continue - ignora o resto do bloco e vai direto para próxima checagem;
// break - trava bloco de repetição continuando o código depois do bloco.