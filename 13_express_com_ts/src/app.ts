// 1 - iniciando projeto
//console.log("express + ts !!")

// 2 - init express
import express, {Request, Response, NextFunction} from 'express'
import { read } from 'fs'

const app = express()

// 3 - rota com post
app.use(express.json())

// 11 - middleware para todas as rotass
function showPath(req: Request, res: Response, next: NextFunction ) {
  console.log(req.path)
  next()
}

app.use(showPath)

app.get("/", (req, res) => {
  return res.send("hello express")
})

// 3 - rota com post
app.post("/api/product", (req, res) => {
  console.log(req.body);

  return res.send("produto adicionado")
})

// 4 - rota para todos os verbos
app.all("/api/product/check", (req, res) => {
  if(req.method === "POST") {
    return res.send("inseriu algum registro")
  } else if(req.method === "GET") {
    return res.send("leu algum registro")
  } else {
    return res.send("nao podemos realizar esta operacao")
  }
})

// 5 - interface do express
app.get("/api/interfaces", (req: Request, res: Response) => {
  return res.send("utilizando as interfaces")
})

// 6 - enviando json
app.get("/api/json", (req: Request, res: Response) => {
  return res.json({
    nome: "shirt",
    price: 30.99,
    color: "blue",
    sizes: [1,2,3]
  })
})

// 7 - router parameters
app.get("/api/product/:id", (req: Request, res: Response) => {
  console.log(req.params)

  return res.send("produto nao encontrado")
})

// 8 - rotas complexas
app.get("/api/product/:id/review/:reviewId", (req: Request, res: Response) => {
  console.log(req.params)
  const productId = req.params.id
  const reviewId = req.params.reviewId

  return res.send(`acessando review ${reviewId} do produto ${productId}`)
})

function getUser(req: Request, res: Response) {
  console.log(`resgatando o usuario com id : ${req.params.id}`)
}

// 9 - router handle
app.get("/api/user/:id", getUser)

// 10 - middleware
function checkUser(req: Request, res: Response, next: NextFunction ) {
  if(req.params.id === "1") {
    console.log("pode seguir")
    next();
  } else {
    console.log("acesso restrito")
  }
}

app.get("/api/user/:id/access", checkUser, (req: Request, res: Response) => {
  return res.json({ msg: "bem-vindo a area adiminstrativa" })
})

app.listen(3000, () => {
  console.log("aplicação de ts + express funcionando")
})