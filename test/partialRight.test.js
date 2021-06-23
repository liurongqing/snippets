const partialRight = require('../src/partialRight')

const greet = (greeting, name) => greeting + ' ' + name + '!'
const greetHello = partialRight(greet, 'John')

test('partialRight(greet, "Hello")', () => {
  expect(greetHello('Hello')).toBe('Hello John!')
})

test('partialRight(greet, "Hi")', () => {
  expect(greetHello('Hi')).toBe('Hi John!')
})
