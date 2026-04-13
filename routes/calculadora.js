const express = require('express');
const router = express.Router();
const calculadoraService = require('../services/calculadoraService');

router.get('/somar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: calculadoraService.somar(a, b) });
});

router.get('/subtrair', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: calculadoraService.subtrair(a, b) });
});

router.get('/multiplicar', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  res.json({ resultado: calculadoraService.multiplicar(a, b) });
});

router.get('/dividir', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  try {
    const resultado = calculadoraService.dividir(a, b);
    res.json({ resultado });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
});

module.exports = router;