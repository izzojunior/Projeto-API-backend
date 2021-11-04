const express = require("express");
const router = express.Router();
  
const jogos = [
   "Grand Theft Auto San Andreas",
   "Buling",
   "Black",
   "Need for Speed",
   "Midnight 3 dub remix",
   "Assassin creed 3",
   "mortal kombat",
   "Call of duty",
   "The last of us",
   "Tom Clancy's Splinter Cell: Blacklist.",
]

router.get("/", (req, res) => {
  res.send(jogos);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const jogo = jogos[id];

  if (!jogo) {
    res.send("Jogo não encontrado.");
    return;
  }
  res.send(jogo);
});

router.post("/", (req, res) => {
  const jogo = req.body.jogo;

  const id = jogos.length;

  jogos.push(jogo);

  res.send(`Jogo adicionado com sucesso: '${jogo}'. ID do jogo: '${id}'.`);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const jogo = req.body.jogo;

  jogos[id] = jogo;

  res.send(`Jogo atualizado com sucesso: '${jogo}'.`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  delete jogos[id];

  res.send("Jogo excluido com sucesso.");
});

module.exports = router;