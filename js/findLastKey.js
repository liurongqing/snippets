/**
 * 查找最后一个Key， 与 findKey 函数类似
 * @param {Object} obj
 * @param {Function} fn
 * @returns
 *
 * @example
 * findLastKey(
 *  {
 *    barney: { age: 36, active: true },
 *    fred: { age: 40, active: false },
 *    pebbles: { age: 1, active: true }
 *  },
 *  x => x['active']
 * ) // 'pebbles'
 */
const findLastKey = (obj, fn) =>
  Object.keys(obj)
    .reverse()
    .find((key) => fn(obj[key], key, obj))
