const elementos  = [
    {tag:"p", texto: "Frase 1"},
    {tag:"div", texto: "Frase 2"},
    {tag:"footer", texto: "Frase 3"},
    {tag:"section", texto: "Frase 4"},
]

for (let i = 0; i < elementos.length; i++) {
    const {tag, texto} = elementos[i];
    printText(tag, texto)  
}

function printText(tag, texto) {
    const div = document.createElement(tag);
    div.innerText = `${texto}`;

    const container = document.querySelector(".container");
    container.appendChild(div);
}

/* Criando um nó de texto:

let texto = documento.createTextNode(texto);
div.appendChild0(texto);
*/