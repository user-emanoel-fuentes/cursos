/* TIPOS DE DADOS
Primitivos (valores imutáveis) - string, number, boolean, unfefined, null (bigint, symbol)
    - Em dados primitivos, falar que uma variável é igual a outra executa uma ação de cópia, portanto independente doque aconteça
    com a variável que foi copiada, a cópia permanece intácta (IL.1);

Referência (valores mutáveis) - array, object, function
    - No caso de dados de reverência, ao declarar que uma variável recebe o valor de outra variável, endereça a segunda variável 
    para olhar no mesmo espaço de memória que a primeira, portanto, alterações impactarão ambas as variáveis (IL.2);
*/

// IL.1:
    let a = "A";
    let b = a;
    // console.log(a, b);
    a = "C"
    // console.log(a, b); // A variável "b" continua com o valor copiado "A";

// IL.2 
    let c = [1,2,3];
    let d = c;
    console.log(c, d);
    c[0] = 5;
    console.log(c,d); // A variável "d" também terá o valor "5" na posição "0", pelo fator da ambas as variáveis apontam para o mesmo espaço da memória;
    // OBS: Para contornar isto, basta utilizar a seguinte sintax: b = [...a] (spred/espalha) Desta forma o valor de "b" fica totalmente idenpendente.
