const calculadoraService = require('../services/calculadoraService');

test('deve somar 10 + 5 corretamente', () => {
  expect(calculadoraService.somar(10, 5)).toBe(15);
});

test('deve subtrair 10 - 5 corretamente', () => {
  expect(calculadoraService.subtrair(10, 5)).toBe(5);
});

test('deve multiplicar 10 * 5 corretamente', () => {
  expect(calculadoraService.multiplicar(10, 5)).toBe(50);
});

test('deve dividir 10 / 5 corretamente', () => {
  expect(calculadoraService.dividir(10, 5)).toBe(2);
});

test('deve lançar erro ao dividir por zero', () => {
  expect(() => calculadoraService.dividir(10, 0)).toThrow('Divisão por zero não permitida');
});