// 1- tipo de objeto para funcao com interface
interface Product {
  name: string
  price: number
  isAvailable: true
}

function showProductDetails(product: Product) {
  console.log(`o nome do produto é ${product.name} e seu preco é ${product.price}`)
  if(product.isAvailable) {
    console.log(`O produto esta disponivel`)
  }
}

const shirt: Product = {
  name: "camisa",
  price: 19.99,
  isAvailable: true
}

showProductDetails(shirt)