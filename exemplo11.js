// Reduce 

var nomes = ['jorge', 'carlos', 'roberto', 'lucas'];

var novoNome = nomes.reduce((acumulado, nome) => acumulado + '-' + nome);

console.log(novoNome); // Saída será: jorge-carlos-roberto-lucas

var valores = [10, 20, 30, 40, 50];

var novoValor = valores.reduce((acumulado, corrente) => acumulado + corrente);

console.log(novoValor); // saída será: 150