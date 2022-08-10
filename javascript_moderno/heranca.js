class Product {
  constructor(name, price) {
    this.name = name
    this.price = price
  }

  productWithDiscount(discount) {
    return this.price * ((100 - discount) / 100)   
  }
}

class ProductWithAtributes extends Product {
  constructor(name, price, colors) {
    super(name, price)
    this.colors = colors
  }

  showColors() {
    console.log("as corres sao")
    this.colors.forEach((color) => {
      console.log(color)
    })
  }
}

const hat = new ProductWithAtributes("chapeu", 20, ["preto", "azul", "verde"])
console.log(hat)