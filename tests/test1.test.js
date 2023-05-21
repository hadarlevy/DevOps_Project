const validFunc = require('../validationFunction.js');

describe('gradeValidation', () => {
  test('returns true for valid grade', () => {
    expect(validFunc.gradeValidation(80)).toBe(true);
  });

  test('returns false for invalid grade', () => {
    expect(validFunc.gradeValidation(-10)).toBe(false);
    expect(validFunc.gradeValidation(200)).toBe(false);
    expect(validFunc.gradeValidation('abc')).toBe(false);
  });

  test('returns false for empty grade', () => {
    expect(validFunc.gradeValidation(null)).toBe(false);
    expect(validFunc.gradeValidation(undefined)).toBe(false);
    expect(validFunc.gradeValidation('')).toBe(false);
  });
});

describe('nameValidation', () => {
  test('returns true for valid name', () => {
    expect(validFunc.nameValidation('Hadar')).toBe(true);
  });

  test('returns false for invalid name', () => {
    expect(validFunc.nameValidation('Hadar123')).toBe(false);
    expect(validFunc.nameValidation('123')).toBe(false);
  });

  test('returns false for empty name', () => {
    expect(validFunc.nameValidation(null)).toBe(false);
    expect(validFunc.nameValidation(undefined)).toBe(false);
    expect(validFunc.nameValidation('')).toBe(false);
  });
});
