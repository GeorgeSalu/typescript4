"use strict";
// 1 - void
function withoutReturn() {
    console.log("esta funcao nao tem retorno");
}
withoutReturn();
// 2 - callback com argumento
function greeting(name) {
    return `Ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("preparando a funcao");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "george");
preGreeting(greeting, "joao");
