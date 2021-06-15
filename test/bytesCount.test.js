const bytesCount = require('../src/bytesCount')

test('bytesCount("123")', () => {
  expect(bytesCount('123')).toBe(3)
})

test('bytesCount("abc")', () => {
  expect(bytesCount('abc')).toBe(3)
})

test('bytesCount("中国")', () => {
  expect(bytesCount('中国')).toBe(4)
})

test('bytesCount("π")', () => {
  expect(bytesCount('π')).toBe(2)
})
