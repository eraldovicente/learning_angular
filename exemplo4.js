// Default Parameters

function somar(x, y = 1) { // Predefinindo o parâmetro caso não passado
    return x + y;
}

console.log("Minha soma é " + somar(5)); // saída será 6