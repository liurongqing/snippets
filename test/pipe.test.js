const pipe = require('../src/pipe')

test('pipe(multiplyAndAdd2(5, 2))', () => {
  const add2 = (x) => x + 2
  const multiply = (x, y) => x * y
  const multiplyAndAdd2 = pipe(multiply, add2)
  expect(multiplyAndAdd2(5, 2)).toBe(12)
})
