const MayBe = require('../src/maybe')

test('MayBe.of("test")', () => {
  expect(MayBe.of('test').value).toBe('test')
})

test('MayBe.of(10).map(v => v * 2).value', () => {
  expect(MayBe.of(10).map((v) => v * 2).value).toBe(20)
})
