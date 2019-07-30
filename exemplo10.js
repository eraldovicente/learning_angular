// Filter

nomes = ['jorge', 'carlos', 'roberto', 'lucas'];

novoNome = nomes.filter(function(nome) {
    // Com o include não precisamos fazer uma validação ele 
    // retorna true ou false automaticamente
    return nome.includes('a'); 
});

console.log(novoNome);  //Saída será "carlos" e "lucas"