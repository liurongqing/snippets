/**
 * 创建一个函数，根据指定位置 调用 不同函数
 * @param {*} fn
 * @param {*} transforms
 * @returns
 */
const overArgs = (fn, transforms) => (...args) =>
  fn(...args.map((val, i) => transforms[i](val)))
