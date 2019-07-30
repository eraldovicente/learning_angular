// Tipagem de parâmetros

let nome = "Eraldo Vicente";

function dizOla(nome: string) {
    console.log("Olá " + nome);   // Saída será: Olá Eraldo Vicente
}

dizOla(nome);

// Caso eu passe um argumento de tipo diferente do
// parâmetro o compilador TypeScript emite um erro

let nome1 = 15;

function dizOla2(nome: string) {
    console.log("Olá " + nome); // Argument of type 'number' is not assignable to parameter of type 'string'
}

dizOla2(nome1);
