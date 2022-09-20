const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('count', () => {
    expect(handlerElephants('count')).toEqual(4);
  });

  test('names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  test('averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  test('location', () => {
    expect(handlerElephants('location')).toBe('NW');
  });

  test('popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });

  test('availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });

  test('undefined se não tiver parâmetro', () => {
    expect(handlerElephants()).toBeUndefined();
  });

  test('Retorna "Parâmetro inválido, é necessário uma string" se parâmetro não for string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });

  test('null se parâmetro for diferente do esperado', () => {
    expect(handlerElephants('Melzinho com Torresmo')).toBeNull();
  });
});
