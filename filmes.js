const express = require("express");
const router = express.Router();
  
const filmes = [
   "Rambo 2",
   "Esterminador do futuro",
   "O exorcista",
   "punisher",
   "Guerra mundial Z",
   "Bonnie e Clyde - Uma Rajada de Bala",
   "O Resgate do Soldado Ryan",
   "Duro de matar",
   "Mad max",
   "Carga explosiva",
]

router.get("/", (req, res) => {
  res.send(filmes);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const filme = filmes[id];

  if (!filme) {
    res.send("Filme não encontrado.");
    return;
  }
  res.send(filme);
});

router.post("/", (req, res) => {
  const filme = req.body.filme;

  const id = filmes.length;

  filmes.push(filme);

  res.send(`Filme adicionado com sucesso: '${filme}'. ID do filme: '${id}'.`);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const filme = req.body.filme;

  filmes[id] = filme;

  res.send(`Filme atualizado com sucesso: '${filme}'.`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  delete filmes[id];

  res.send("Filme excluido com sucesso.");
});

module.exports = router;