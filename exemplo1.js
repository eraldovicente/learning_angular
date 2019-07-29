/* Em JavaScript as variáveis declaradas com "var" tem escopo de função.
* Como o próprio autor da linguagem menciona na década de 90, época em que
* a linguagem foi criada, a maioria das linguagens de script tinham escopo  
* de função e JavaScript foi inspirada nelas.
* Retirado do Twitter @BrendanEich:
* "10 days did not leave time for block scope.
* Also many "scripting languages" of that mid-90s 
* era had few scopes & grew more later."
*/
var qualquerCoisa = true;

if (qualquerCoisa) {
    let nomeVariavel = 'Angular 2'; // "let" estabelece um escopo de bloco
    alert(nomeVariavel);
}

console.log(nomeVariavel);  // nomeVariavel is not defined
console.log(qualquerCoisa); // Imprime no console True