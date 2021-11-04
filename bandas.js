const express = require("express");
const router = express.Router();
  
const bandas = [
  "Iron maiden",
  "Avenged Sevenfold",
  "Slayer",
  "Black Sabbath",
  "AC/DC",
  "Metallica",
  "Kiss",
  "Motörhead",
  "Judas Priest",
  "Led Zeppelin",
];

router.get("/", (req, res) => {
  res.send(bandas);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;

  const banda = bandas[id];

  if (!banda) {
    res.send("banda não encontrada.");
    return;
  }

  res.send(banda);
});

router.post("/", (req, res) => {
  const banda = req.body.banda;

  const id = bandas.length;

  bandas.push(banda);

  res.send(`banda adicionada com sucesso: '${banda}'. ID da banda: '${id}'.`);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const banda = req.body.banda;

  bandas[id] = banda;

  res.send(`Banda atualizada com sucesso: '${banda}'.`);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  delete bandas[id];

  res.send("Banda excluida com sucesso.");
});

module.exports = router;