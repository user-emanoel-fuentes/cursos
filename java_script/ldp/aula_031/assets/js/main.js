function zeroALeft(num){
    return num >=10 ? num : `0${num}`
}

function createText(dayWeek, day, month, year, hours, minutes){
    // Day Week
    let dayWeekText;
    switch(dayWeek){
        case 0:
            dayWeekText = "Domingo";
            break;
        case 1:
            dayWeekText = "Segunda-Feira";
            break;
        case 2:    
            dayWeekText = "Terça-Feira";
            break;
        case 3:    
            dayWeekText = "Quarta-Feira"; 
            break;
        case 4:    
            dayWeekText = "Quinta-Feira";
            break;
        case 5:    
            dayWeekText = "Sexta-Feira";
           break;
        case 6:    
            dayWeekText = "Sábado";
            break;
        default:
            dayWeekText = "";
            break;
        }

    // Months
    let monthText;
    const months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Júlio","Agosto","Setembro","Outubro","Novembro","Dezembro" ]
    monthText = months[month];
       
    return `${dayWeekText}, ${day} de ${monthText} de ${year} ${hours}:${minutes}`;
}

function formatDate(date){
    const dayWeek = date.getDay();
    const day = zeroALeft(date.getDate());
    const month = date.getMonth();
    const year = zeroALeft(date.getFullYear());
    const hours = zeroALeft(date.getHours()+4); // Ajuste para hora atual em SP 
    const minutes = zeroALeft(date.getMinutes());

    return createText(dayWeek, day, month, year, hours, minutes);
}

const result = document.querySelector(".container").querySelector("#title");
const date = formatDate(new Date());
result.innerHTML = date;

