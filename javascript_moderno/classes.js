class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)   
  }
}

const shirt = new Product('camisa gola v', 20)

console.log(shirt.name)