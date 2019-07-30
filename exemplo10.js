// Filter

nomes = ['jorge', 'carlos', 'roberto', 'lucas'];

novoNome = nomes.filter(function(nome) {
    return nome.includes('a');
});

console.log(novoNome); // Saída será "carlos" e "lucas"