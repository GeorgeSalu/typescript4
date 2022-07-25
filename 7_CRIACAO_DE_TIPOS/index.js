"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é : ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generics"));
console.log(showData(true));
// 2 - constraint em generci
function showProductName(obj) {
    return `O nome do produto é : ${obj.name}`;
}
const myObj = { name: "porta", cor: "branca" };
const otherProduct = { name: "carro", wheels: 4, engine: 1.0 };
const thirdObj = { price: 19.9, category: "roupa" };
console.log(showProductName(myObj));
console.log(showProductName(otherProduct));
const myCar = { name: "fusca", wheels: 4, engine: 1.0, color: "branco" };
const myPen = { name: "caneta bic", wheels: false, engine: false, color: "azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, chave) {
    return `A chave esta presente no objeto e tem o valor de ${obj[chave]}`;
}
const server = {
    hd: '2TB',
    ram: "32gb"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "mateus",
    age: 30,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
// 6 - typeof type operator
const userName = "mateus";
const userName2 = "joao";
const userName4 = "joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "camihao para pouca carga"
};
function showKm(km) {
    console.log(`o veiculo tem a km de : ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 50000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
//const someVar2:myType = "teste"
