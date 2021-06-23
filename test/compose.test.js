const compose = require('../src/compose')

test('compose(multiplyAndAdd2(5, 2))', () => {
  const add2 = (x) => x + 2
  const multiply = (x, y) => x * y
  const multiplyAndAdd2 = compose(add2, multiply)
  expect(multiplyAndAdd2(5, 2)).toBe(12)
})
