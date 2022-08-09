// 1 - iniciando projeto
//console.log("express + ts !!")

// 2 - init express
import express from 'express'

const app = express()

// 3 - rota com post
app.use(express.json())

app.get("/", (req, res) => {
  return res.send("hello express")
})

// 3 - rota com post
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("produto adicionado")
})

app.listen(3000, () => {
  console.log("aplicação de ts + express funcionando")
})