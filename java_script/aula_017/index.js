let numero = Number(prompt('Digite um número'));
const idNumeroDigitado = document.getElementById('numero-digitado');
const idTexto = document.getElementById('texto');
idNumeroDigitado.innerHTML = numero;
idTexto.innerHTML = ''
idTexto.innerHTML += `
    <p>RAIZ QUADRADA: <strong>${numero**0.5}</strong></p>
    <p>INTEIRO? <strong>${Number.isInteger(numero)}</strong></p>
    <p>NaN? <strong>${Number.isNaN(numero)}</strong></p>
    <p>ARREDONDANDO PARA CIMA FICA:<strong>${Math.ceil(numero)}</strong></p>
    <p>ARREDONDANDO PARA BAIXO FICA: <strong>${Math.floor(numero)}</strong></p>
    <p>COM DUAS CASAS DECIMAIS FICA: <strong>${numero.toFixed(2)}</strong></p>`;










