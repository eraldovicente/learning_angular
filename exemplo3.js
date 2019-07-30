/* O operador bitwise atuado como uma flag de validação.
*  Se a função receber  segundo parâmetro será então atribuido,
*  senão o valor "1" será definido.
*/ 
function somar(x, y) {
    y = y | 1;            // O "pipe" é o operador bitwise or
    return x + y;
}

console.log("Minha soma é: " + somar(5)); // saída será 6