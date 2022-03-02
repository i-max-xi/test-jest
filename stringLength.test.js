const stringLength = require('./stringLenght');

test('returns length of string', () => {
  expect(stringLength("hello")).toBe(5);
});