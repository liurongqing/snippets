/**
 * 反向迭代属性，并为每个属性运行回调
 * @param {Object} obj
 * @param {Function} fn
 * @returns
 *
 * @example
 * forOwnRight({ foo: 'bar', a: 1 }, v => console.log(v)); // 1, 'bar'
 */
const forOwnRight = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .forEach((key) => fn(obj[key], key, obj))
