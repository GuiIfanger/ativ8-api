const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// Rota da API
app.get('/data-hora', (req, res) => {
  res.json({ dataHora: new Date().toISOString() }); 
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`); 
});
