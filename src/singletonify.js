const singletonify = (className) =>
  new Proxy(className.prototype.constructor, {
    instance: null,
    construct: (target, ...arg) => {
      if (!this.instance) {
        this.instance = new target(...arg)
      }
      return this.instance
    }
  })

module.exports = singletonify
