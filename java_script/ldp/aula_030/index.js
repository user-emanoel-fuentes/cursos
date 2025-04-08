// Swicth cases são estruturas de ações baseadas no valor da variável.

const data = new Date("2004-04-04 04:04:04");
let dayWeek = data.getDay();

// diaSemana = 5;

// Output baseado em swicht 
// switch(diaSemana){
// case 0:
//     diaSemanaTexto = "Domingo";
//     break;
// case 1:
//     diaSemanaTexto = "Segunda-Feira";
//     break;
// case 2:    
//     diaSemanaTexto = "Terça-Feira";
//     break;
// case 3:    
//     diaSemanaTexto = "Quarta-Feira"; 
//     break;
// case 4:    
//     diaSemanaTexto = "Quinta-Feira";
//     break;
// case 5:    
//     diaSemanaTexto = "Sexta-Feira";
//     break;
// case 6:    
//     diaSemanaTexto = "Sábado";
//     break;
// default:
//     diaSemanaTexto = "";
//     break;
// } 
// OBS: Obrigatório o uso da palavra "break" para o funcionamento do swith (A mesnos que esteja em uma função, pois o break é substituído pelo "return"), somente é opcional no parâmetro "default";

// Output baseado em condicionais Se, Ou Se, Se não. :
// if (diaSemana === 0) {
//     diaSemanaTexto = "Domingo";
// } else if (diaSemana === 1) {
//     diaSemanaTexto = "Segunda-Feira";
// }else if (diaSemana === 2) {
//     diaSemanaTexto = "Terça"    
// }else if (diaSemana === 3) {
//     diaSemanaTexto = "Quarta-Feira";    
// }else if (diaSemana === 4) {
//     diaSemanaTexto = "Quinta-Feira";    
// }else if (diaSemana === 5) {
//     diaSemanaTexto = "Sexta-Feira";    
// }else if (diaSemana === 6) {
//     diaSemanaTexto = "Sábado";    
// } else {
//     diaSemanaTexto = "";
// }

function pegarDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch(diaSemana){
        case 0:
            diaSemanaTexto = "Domingo";
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = "Segunda-Feira";
            return diaSemanaTexto;
        case 2:    
            diaSemanaTexto = "Terça-Feira";
            return diaSemanaTexto;
        case 3:    
            diaSemanaTexto = "Quarta-Feira"; 
            return diaSemanaTexto;
        case 4:    
            diaSemanaTexto = "Quinta-Feira";
            return diaSemanaTexto;
        case 5:    
            diaSemanaTexto = "Sexta-Feira";
            return diaSemanaTexto;
        case 6:    
            diaSemanaTexto = "Sábado";
            return diaSemanaTexto;
        default:
            diaSemanaTexto = "";
            return diaSemanaTexto;
        } 
}

console.log(dayWeek, pegarDiaSemanaTexto(dayWeek)); // 0, domingo