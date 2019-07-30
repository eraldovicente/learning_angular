/* A parametrização em JavaScript é bastante dinâmica,  
* porém receber menos argumentos do que foi definido na
* assinatura da função como parâmetros pode resultar problemas
* Como no exemplo a função recebe um number que é somado a um 
* undefined( parâmetro que não foi passado) resultando em NaN.
*/
function somar(x, y) {
    return x + y;
}

console.log("minha soma é: " + somar(5)); // saída será NaN