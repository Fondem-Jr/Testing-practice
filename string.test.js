const stringLength = require('./string');
const reverseString = require('./reverseString');

test('Count the number of characters in end', () => expect(stringLength('end')).toBe(3));

test('Less than one character', () => 
expect(stringLength('')).toBe(undefined));

test('More than 10 character', () => 
expect(stringLength('Gonetoworkonproject')).toBe(undefined));

test('number of characters betwwen 1 and 10', () => 
expect(stringLength('Gonetowork')).toBe(10));

test('should reverse the string', () =>
 expect(reverseString('end')).toMatch('dne'));

