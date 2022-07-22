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
// 3 - generic function 
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObject(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObject({ name: "matheus" }, { age: 30, job: "programer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3,], [5, 6]));
console.log(mergeArrays([1, 2, 3,], ["teste", "testando"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet} ${name}, tudo bem ?`;
    }
    return `Ola ${name}, tudo bem`;
}
console.log(modernGreeting("george"));
// 7 - paramentro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 12));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um numero");
    }
}
doSomething([1, 2, 3]);
doSomething(5);
