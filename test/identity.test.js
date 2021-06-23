const identity = require('../src/identity')

test('identity(1)', () => {
  expect(identity(1)).toBe(1)
})

test('identity("str")', () => {
  expect(identity('str')).toBe('str')
})
