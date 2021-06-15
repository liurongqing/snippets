const tofixed = require('../src/tofixed')

test('tofixed(1.235) to 1.24', () => {
  expect(tofixed(1.235)).toBe(1.24)
})

test('tofixed(1.235, 1) to 1.2', () => {
  expect(tofixed(1.235, 1)).toBe(1.2)
})

test('tofixed(1.2, 2, true) to 1.20', () => {
  expect(tofixed(1.2, 2, true)).toBe('1.20')
})
