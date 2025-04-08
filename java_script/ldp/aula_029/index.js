// JS: Objeto Date (Datas)
let date;

// new Date(0); // Timestamp unix (marco zero) = 01/01/1970
// console.log(date.toString());

// OBS:
// Os meses são contados a partir do número 0 = [0-11 | Janeiro-Dezembro];

// Quando trabalhar com algum período específico, precisa passar no mínimo, ano e mês. 
// Entretanto, os possíveis parâmetros são: ANO, MES, DIA, HORAS, MINUTOS, SEGUNDOS, MILÉZIMOS-SEGUNDO;

// Pegando parâmetros atuais de data:
// date = new Date();
// console.log(date.toString());

// Programando data específica:
// date = new Date(2025, 3, 4);
// console.log(date.toString());

// Formatando data com string:
// date = new Date('2025-04-04 23:59:59');
// console.log(date.toString());

// Obtendo ano, mês, dia, hora, min, seg, ms, número-dia-semana:
// console.log("ANO", date.getFullYear());
// console.log("MÊS", date.getMonth()); // 0 = Janeiro, 11 = Dezembro
// console.log("DIA", date.getDate());
// console.log("HORA", date.getHours());
// console.log("MINUTO", date.getMinutes());
// console.log("SEGUNDO", date.getSeconds());
// console.log("MILI-SEGUNDO", date.getMilliseconds());
// console.log("NÚMERO-DIA-SEMANA", date.getDay()); // 0 = Domingo, 6 = Sábado


// // Obtendo a data atual em mili-segundos:
// const miliDataAtual = Date.now();
// const novaData = new Date(miliDataAtual);
// console.log(novaData);


// Exercício: Criar uma função que retorne a data no formato brasileiro:

function zeroAEsquerda(num){
    return num >=10 ? num : `0${num}`
}

function formataData(data){
    const ano = zeroAEsquerda(data.getFullYear());
    const mes = zeroAEsquerda(data.getMonth()+1);
    const dia = zeroAEsquerda(data.getDate());
    const hora = zeroAEsquerda(data.getHours()+4); // Ajustando para horário atual em SP
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}
const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);