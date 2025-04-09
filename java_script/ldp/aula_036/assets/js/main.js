const paragrafo = document.querySelector(".paragrafos");
const paragrafos = paragrafo.querySelectorAll("p");

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
// const colorWrite = estilosBody.

// Minha resolução:

// const textoEstiloParagrafo = `.estilo-paragrafo { 
//     background-color: ${backgroundColorBody};
//     color: white;
// }`;

// const estilo = document.createElement("style");
// estilo.innerHTML = textoEstiloParagrafo;

// const cabeca = document.head;

// cabeca.appendChild(estilo);

// paragrafos.forEach(function(valor){
//     valor.classList.add("estilo-paragrafo");
// });

paragrafos.forEach(function(valor){
    valor.style.backgroundColor = backgroundColorBody;
    valor.style.color = "#ffffff";
});