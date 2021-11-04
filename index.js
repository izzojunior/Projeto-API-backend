const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req,res) => {
    res.status(200).json({message:"bem vindos a nossa API"}); //.status devolve com o status http que passarmos
});

const bandasRouter = require("./bandas"); //importando arquivo de rota externa
app.use("/bandas", bandasRouter); //definindo o arquivo na nossa aplicacao

const filmesRouter = require("./filmes");
app.use("/filmes",filmesRouter);

const jogosRouter = require("./jogos");
app.use("/jogos",jogosRouter);

app.listen(port, () => {
    console.info(`App rodando em: http://localhost:${port}`);
});