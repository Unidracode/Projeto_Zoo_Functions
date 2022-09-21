const getOpeningHours = require('../src/getOpeningHours');
const date = require('../data/zoo_data');

describe('Testes da função getOpeningHours', () => {
  const closed = 'The zoo is closed';
  const open = 'The zoo is open';

  test('dias e horários', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });

  test('Monday = closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe(closed);
  });

  test('Tuesday = open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe(open);
  });

  test('Wednesday after hours = closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe(closed);
  });

  test('Erro, dia inválido', () => {
    expect(() => getOpeningHours('Melzinho com Torresmo nham nham', '09:00-AM')).toThrowError(new Error('The day must be valid. Example: Monday'));
  });

  test('Erro, hora inválida', () => {
    expect(() => getOpeningHours('Tuesday', '45:00-AM')).toThrowError(new Error('The hour must be between 0 and 12'));
  });

  test('Erro, minutos inválidos', () => {
    expect(() => getOpeningHours('Thursday', '09:76-AM')).toThrowError(new Error('The minutes must be between 0 and 59'));
  });

  test('Erro, am nem pm', () => {
    expect(() => getOpeningHours('Friday', '09:00-PP')).toThrowError(new Error('The abbreviation must be \'AM\' or \'PM\''));
  });

  test('Erro, minutos sem número', () => {
    expect(() => getOpeningHours('Saturday', '09:dS-AM')).toThrowError(new Error('The minutes should represent a number'));
  });

  test('closing hours', () => {
    const { hours } = date;
    hours.Friday.close = 12;
    expect(getOpeningHours('Friday', '12:00-AM')).toBe(closed);
  });

  test('opening hours', () => {
    const { hours } = date;
    hours.Tuesday.open = 12;
    expect(getOpeningHours('Tuesday', '12:00-AM')).toBe(open);
  });
});
