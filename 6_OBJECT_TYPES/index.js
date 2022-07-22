"use strict";
function showProductDetails(product) {
    console.log(`o nome do produto é ${product.name} e seu preco é ${product.price}`);
    if (product.isAvailable) {
        console.log(`O produto esta disponivel`);
    }
}
const shirt = {
    name: "camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
function showUSerDetails(user) {
    console.log(`O usuario tem o e-mail : ${user.email}`);
    if (user.role) {
        console.log(`A funcao do usuario é : ${user.role}`);
    }
}
const u1 = { email: "matues@gmail.com", role: "admin" };
const u2 = { email: "joao@gmail.com" };
showUSerDetails(u1);
showUSerDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
console.log(fusca);
let coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
const matheus = {
    name: "matheus",
    age: 30
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["hamehamera", "gemkidama"]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shortgun",
    caliber: 12
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["maca", "laranja", "banana"];
//myArray[3] = "mamao"
console.log(myArray);
myArray.forEach((item) => {
    console.log("fruta : " + item);
});
