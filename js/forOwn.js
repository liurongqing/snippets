/**
 * 遍历对象的所有属性
 * @param {Object} obj
 * @param {Function} fn
 * @returns
 *
 * @example
 * forOwn({ foo: 'bar', a: 1 }, v => console.log(v)); // 'bar', 1
 */
const forOwn = (obj, fn) =>
  Object.keys(obj).forEach((key) => fn(obj[key], key, obj))
