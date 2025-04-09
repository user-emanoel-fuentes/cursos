// JS: Perdendo medo de erros; Try Cath e Throw


// try { // Roda esse código se der algum problema pula para o bloco abaixo
//     console.log(nome); // ReferenceError: nome is not defined

// } catch(error) { // Bloco abaixo.
//     console.log("Nome não existe!");
// }
let erro;

function soma(x,y) {
    if (typeof x !== "number" || typeof y !== "number") {
        throw new Error("x e y precisam ser números");
    }
    return x + y
}
try {
    console.log(soma(1, "5"));
} catch (error) {
    console.log(error)
}
