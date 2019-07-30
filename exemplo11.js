// Reduce 

var nomes = ['jorge', 'carlos', 'roberto', 'lucas'];

var novoNome = nomes.reduce((acumulado, nome) => acumulado + '-' + nome);

console.log(novoNome); // Saída será: jorge-carlos-roberto-lucas