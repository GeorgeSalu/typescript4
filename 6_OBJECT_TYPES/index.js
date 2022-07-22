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
