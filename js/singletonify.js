/**
 * 通过中间件，创建单例
 * @param {Object} className 类
 * @returns 单例
 * 
 * @example
 * 
 * class MyClass {
 *  constructor(msg) {
 *    this.msg = msg
 *  }
 * 
 *  printMsg() {
 *    console.log(this.msg)
 *  }
 * }
 * 
 * const MySingletonClass = singletonify(MyClass)
 * const myObj = new MySingletonClass('first')
 * myObj.printMsg() // 'first'
 * const myObj2 = new MySingletonClass('second)
 * myObj2.printMsg() // 'first'
 */
const singletonify = (className) => {
  return new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, argumentsList) => {
      if (!this.instance) this.instance = new target(...argumentsList)
      return this.instance
    },
  })
}
