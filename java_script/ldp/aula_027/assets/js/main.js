function mainScope() {
    const form = document.querySelector(".form");

    // Gerar script que calcule o IMC do usuário com base no peso e altura informado (peso/(altura**2));
    function calculateIMC(weight, height) {
        data = (Number(weight/(height**2)));
        return data.toFixed(2); 
    }

    // Gerar script condicional com base no resultado do IMC; 
    function interpretIMC(imc) {
       let message;
       if (imc < 18.5) {
           message = 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 24.9) {
            message = 'Peso Normal';            
        }else if (imc >= 25 && imc < 29.9) {
            message = 'Sobrepeso';
        }else if (imc >= 30 && imc < 34.9) {
            message = 'Obesidade grau 1';
        }else if (imc >= 35 && imc < 39.9) {
            message = 'Obesidade grau 2';
        }else if (imc > 40) {
            message = 'Obesidade grau 3';
        }
        return {imc: imc, message: message};
    }
    
    // Alimentar div "resultado" com o condicional verdadeiro;
    function printData(data){
        const divResult = form.querySelector(".result");
        if (data.imc && data.message) {
            divResult.innerHTML = `Seu IMC é ${data.imc} (${data.message}).`
        } else {
            divResult.innerHTML = `${data.message}`
        }

    } 

    // Desativar ação de recarregar a página quando clica no botão enviar;
    function getEvent(event){
        event.preventDefault();
        
        // Obter dados digitaligados;


        const inputWeight = form.querySelector("#input-weight");
        const weight = Number(inputWeight.value);

        const inputHeight = form.querySelector("#input-height");
        const height = Number(inputHeight.value);

        // Previnindo entradas corretas:
        if (!weight && height) {
            printData({message: "Preencha o campo PESO."})
        } else if (weight && !height) {
            printData({message: "Preencha o campo ALTURA."})
        } else if (!weight && !height) {
            printData({message: "Preencha os campos PESO e ALTURA."})
        } else {
            const imc = calculateIMC(weight.value, height.value);
            const dataAnalyze = interpretIMC(imc);
            printData(dataAnalyze);    
        }
        
        
    }

    form.addEventListener("submit", getEvent);
}
mainScope();


// OBS: 

// É possível criar uma marcadores html através do método createElement("")
/* SINTAX EXEMPLO:
    1- Selecionando DIV de ID "resultado":
    const result = document.querySelector("#resultado");

    2- Criando marcador parágrafo:
    const p = document.createElement("p");

    3- Atribuindo mais informações ao marcador gerado:
    p.innerHTML = "Texto que ficará dentro do marcador!"

    4 - Atrelando marcador a DIV "result":
    result.appendChild(p);
*/

// Também podemos atribuir uma classe para o marcador criado:

// p.classList.add("nome-da-classe"); "Com isso, é possível atribuir diferentes comportamentos CSS que serão iniciados a partir de classes"