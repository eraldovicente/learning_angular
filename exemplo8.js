// Map

// O callback da função map percorre item por item da variável
var arrayNumeros = [2, 3, 4, 5, 6];

var novoValor = arrayNumeros.map(function(num) {
    return num * 2;
});

console.log(novoValor);

