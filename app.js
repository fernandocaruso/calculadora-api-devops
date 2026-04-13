const express = require('express');
const calculadoraRoutes = require('./routes/calculadora');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/calculadora', calculadoraRoutes);

app.get('/', (req, res) => {
  res.send('API Calculadora DevOps funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});