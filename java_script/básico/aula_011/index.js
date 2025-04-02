// Funções básicas

// Ações feitas na janela (window) do navegador: 

// window.alert('Imprime um alerta na janela!');

// window.confirm('Imprime uma confirmação na janela'); // Retorna 'true' ou 'false'

// window.prompt('Impreme uma janela que solicita um dado do usuário.'); // Retorna um valor 'string' por padrão


// Exercício:

// Obtendo Dados
let primeiroValor = window.prompt('Digite um número');
let segundoValor = window.prompt('Digite outro número');

// Tratando dados
primeiroValor = Number(primeiroValor);
segundoValor = Number(segundoValor);

// Calculando
const valorDaAdicao = primeiroValor + segundoValor;

// Saída para usuário
window.alert(`A soma desses números é ${valorDaAdicao}.`)