const pick = require('../src/pick')

test('pick({ a: 1, b: 2, c: 3})', () => {
  const data = {
    a: 1,
    b: 2,
    c: 3
  }
  expect(pick(data, ['a', 'b'])).toEqual({ a: 1, b: 2 })
})
