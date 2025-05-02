const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // <-- Usar process.env.PORT é CRÍTICO

app.get('/data-hora', (req, res) => {
    res.json({ dataHora: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`); // <-- Isso deve aparecer nos logs
});
