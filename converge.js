/**
 * 接收个函数列表，执行结果再给函数
 * @param {Function} converger 最后执行的函数
 * @param {Function} fns 很多函数
 * @returns
 *
 * @example
 * const average = converge((a, b) => a / b, [
 *  arr => arr.reduce((a, v) => a + v, 0),
 *  arr => arr.length
 * ])
 * average([1, 2, 3, 4, 5, 6, 7]); // 4
 */
const converge = (converger, fns) => (...args) =>
  converger(...fns.map((fn) => fn.apply(null, args)))
