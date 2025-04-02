function meuEscopo() {
    // Obtendo os dados;
    const form = document.querySelector(".form");
    const pessoas = [];

    function empurrarDado(dado) {
        pessoas.push(dado);
        return pessoas;
    }

    // form.onsubmit = evento => evento.preventDefault(); // modo antigo de fazer.
    function automacao(nome, sobrenome, peso, altura) {
        const dado = {
            nome:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value,
        };
        
        // Imprime dados no body
        const divResultado = document.querySelector(".resultado");
        divResultado.innerHTML += `<p>${dado.nome} ${dado.sobrenome}, ${dado.peso}KG, ${dado.altura}m.</p>`;
        
        return empurrarDado(dado);
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();

        const nome = form.querySelector(".nome");
        const sobrenome = form.querySelector(".sobrenome");
        const peso = form.querySelector(".peso");
        const altura = form.querySelector(".altura");

        console.log(automacao(nome, sobrenome, peso, altura));
    }

    form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();