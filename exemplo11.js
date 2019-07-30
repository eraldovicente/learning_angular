// Reduce

nomes = ['jorge', 'carlos', 'roberto', 'lucas'];

novoNome = nomes.reduce((acumulado, nome) => acumulado + '-' + nome);

console.log(novoNome); // Saída será: jorge-carlos-roberto-luca