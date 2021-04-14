/**
 * 根据迭代器函数及过滤的字段，对原数组进行过滤
 * @param {Array} arr 原数组
 * @param  {...any} args 过滤的字段  过滤的函数
 *
 * @example
 *
 * const myArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }]
 * pullBy(myArray, [{ x: 1 }, { x: 3 }], (o) => o.x)
 */
const pullBy = (arr, ...args) => {
  const length = args.length
  let fn = length > 1 ? args[length - 1] : undefined
  fn = typeof fn === 'function' ? (args.pop(), fn) : undefined
  let argState = (Array.isArray(args[0]) ? args[0] : args).map((val) => fn(val))
  let pulled = arr.filter((v, i) => !argState.includes(fn(v)))
  arr.length = 0
  pulled.forEach((v) => arr.push(v))
}
