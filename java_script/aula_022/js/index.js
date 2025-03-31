function meuEscopo() {
    // Obtendo os dados;
    const form = document.querySelector(".form");
    


    // Aguardando evento:
    // form.onsubmit = evento => evento.preventDefault(); // modo antigo de fazer.
    function automacao(nome, sobrenome, peso, altura) {

        // Imprime dados no body
        const divResultado = document.querySelector(".resultado");
        divResultado.innerHTML += `<p>${nome} ${sobrenome}, ${peso}KG, ${altura}m.</p>` 

        // Retorna objeto;
        return {nome, sobrenome, peso, altura};
    }



    function recenerEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        console.log(automacao(nome.value, sobrenome.value, peso.value, altura.value));
        

        // console.log(nome.value, sobrenome.value, peso.value, altura.value);
        
        
    }

    form.addEventListener("submit", recenerEventoForm);
}
meuEscopo();