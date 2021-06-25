const deepClone = require('../src/deepClone')

const a = { foo: 'bar', obj: { a: 1, b: 2 } }
const b = deepClone(a)

test('deepClone a !== b', () => {
  expect(a !== b).toBe(true)
})

test('deepClone a.obj !== b.obj', () => {
  expect(a.obj !== b.obj).toBe(true)
})
