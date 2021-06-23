const partial = require('../src/partial')

test('partial(greet, "Hello")', () => {
  const greet = (greeting, name) => greeting + ' ' + name + '!'
  const greetHello = partial(greet, 'Hello')
  expect(greetHello('John')).toBe('Hello John!')
})
