const mathOperations = require('./calculator');

describe("Calculator tests", () => {
    test('adding 1 + 2 should return 3', () => {
      expect(mathOperations.sum(1, 2)).toBe(3);
    });
    test('adding -7 + 10 should return 3', () => {
        expect(mathOperations.sum(-7, 10)).toBe(3);
    });
      test('adding -7 + -2 should return -9', () => {
        expect(mathOperations.sum(-7, -2)).toBe(-9);
    });
})

describe("Calculator tests", () => {
    test('1 - 2 should return -1', () => {
      expect(mathOperations.substract(1, 2)).toBe(-1);
    });
    test('-7 - 10 should return -17', () => {
        expect(mathOperations.substract(-7, 10)).toBe(-17);
    });
      test('-7 - -2 should return -5', () => {
        expect(mathOperations.substract(-7, -2)).toBe(-5);
    });
})

describe("Calculator tests", () => {
    test('1 * 2 should return 2', () => {
      expect(mathOperations.multiply(1, 2)).toBe(2);
    });
    test('-7 * 10 should return -70', () => {
        expect(mathOperations.multiply(-7, 10)).toBe(-70);
    });
      test('-7 * -2 should return 14', () => {
        expect(mathOperations.multiply(-7, -2)).toBe(14);
    });
})

describe("Calculator tests", () => {
    test('4 / 2 should return 2', () => {
      expect(mathOperations.divide(4, 2)).toBe(2);
    });
    test('-7 / 10 should return -0.7', () => {
        expect(mathOperations.divide(-7, 10)).toBe(-0.7);
    });
      test('-6 / -2 should return 3', () => {
        expect(mathOperations.divide(-6, -2)).toBe(3);
    });
})