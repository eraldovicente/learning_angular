// Declaração de variáveis em TypeScript

let nome: string = "Eraldo Vicente";
let ano: number = 2019;
let desenvolvedor: boolean = true;

// Declaração de array

let lista: number[] = [1, 2, 3, 4];

// Generics

let lista1: Array<number> = [1, 2, 3, 4];

// Criando classes em TypeScript

class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla():string{
        return "Olá, " + this.nome;
    }
}

var eraldo = new Pessoa("Eraldo");

// Criando um array de classes do tipo Pessoa

var pessoas: Pessoa[] = new Array();

pessoas.push(eraldo);

// Uso de any e void

var lista2:any[] = [1, true, "angular"];

function logConsole(): void {
    console.log("Simples log no console");
}

// Visibilidade 

class Pessoa2 {
    private nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }
    
    dizOla(): string {
        return "Olá, " + this.nome;
    }
}

// Parâmetros opcionais e com dois

function juntarNome(nome: string, sobrenome?: string): string {
    if (sobrenome) {
        return nome + ' ' + sobrenome;
    }
    else {
        return nome;
    }
}

function logConsole2(log: (string | number)) {
    console.log(log);
}

function logConsole3(log: (string | number), conteudo: (number | any[])) {
    console.log(log);
    console.log(conteudo);
}