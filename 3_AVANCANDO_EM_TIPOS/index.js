"use strict";
// 1 - array
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers);
const nomes = ["matheus", "george"];
console.log(nomes);
// 2 - outra sintaxe array
const nums = [100, 200, 300];
console.log(nums);
// 3 - any
const arr1 = [1, "teste", true, [], { nome: "mateus" }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorna de funcao
function greeting(name) {
    return `Ola ${name}`;
}
console.log(greeting("george"));
// 6 - funcao anonima
setTimeout(function () {
    const sallary = 1000;
    //console.log(parseFloat(sallary))
}, 200);
// 7 - tipos de objeto
function passCorrdinates(coord) {
    console.log("x coordinates: " + coord.x);
    console.log("x coordinates: " + coord.y);
}
const objCorrd = { x: 21, y: 22 };
passCorrdinates(objCorrd);
const pessoaObj = { nome: "george", surname: "silva" };
