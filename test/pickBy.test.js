const pickBy = require('../src/pickBy')

test('pickBy({ a: 1, b: "2", c: 3 } to { a: 1, c: 3})', () => {
  const data = { a: 1, b: '2', c: 3 }
  expect(pickBy(data, (x) => typeof x === 'number')).toEqual({ a: 1, c: 3 })
})
