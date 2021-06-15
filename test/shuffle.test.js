const shuffle = require('../src/shuffle')

test('shuffle([1, 2, 3, 4, 5, 6])', () => {
  const data = [1, 2, 3, 4, 5, 6]
  expect(shuffle(data)).not.toEqual(data)
})
