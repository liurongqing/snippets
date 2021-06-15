const singletonify = require('../src/singletonify')

test('single class A', () => {
  class A {
    constructor(msg) {
      this.msg = msg
    }

    getMsg() {
      return this.msg
    }
  }

  const SingleA = singletonify(A)
  const Obj1 = new SingleA('one')
  const Obj2 = new SingleA('two')

  expect(Obj1.getMsg()).toBe(Obj2.getMsg())
})
