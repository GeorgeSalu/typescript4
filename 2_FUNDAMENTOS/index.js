"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.58;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "george";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "silva";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean 
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4- interface e annotation 
const ann = "teste";
let inf = "Teste";
// ann = 1
// inf = 1
console.log("testando tsc -w");
