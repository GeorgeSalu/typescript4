const products = [
  { name: "camisa", price: 10.3, category: 'roupas' },
  { name: "chaleira eletrica", price: 49.3, category: 'eletro' },
  { name: "fogao", price: 400, category: 'eletro' },
  { name: "calca jeans", price: 50.3, category: 'roupas' }
]

products.map((product) => {
  if(product.category === 'roupas') {
    product.onSale = true
  }
})

console.log(products)