const express = require('express');
const router = express.Router();

router.get('/somar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: a + b });
});

router.get('/subtrair', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: a - b });
});

router.get('/multiplicar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: a * b });
});

router.get('/dividir', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  if (b === 0) {
    return res.status(400).json({ erro: 'Divisão por zero não é permitida' });
  }

  res.json({ resultado: a / b });
});

module.exports = router;