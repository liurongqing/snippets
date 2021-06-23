const curry = require('../src/curry')

test('curry(Math.pow)(2)(10)', () => {
  expect(curry(Math.pow)(2)(10)).toBe(1024)
})

test('curry(Math.min, 3)(10)(50)(2)', () => {
  expect(curry(Math.min, 3)(10)(50)(2)).toBe(2)
})

test('curry(Math.min, 3)(10, 50)(2)', () => {
  expect(curry(Math.min, 3)(10, 50)(2)).toBe(2)
})
