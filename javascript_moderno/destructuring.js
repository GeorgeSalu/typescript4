const fruits = ["maca", "laranja", "mamao"]

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)

const productDetails = {
  name: "mouse",
  price: 12,
  category: "perifericos",
  color: "cinza"
}

const {name: productName} = productDetails

console.log(productName)
