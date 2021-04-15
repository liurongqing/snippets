/**
 * 根据函数映射对象的值，生成一个相同键的新对象
 * @param {Object} obj 原对象
 * @param {Function} fn 映射函数
 * @returns 新对象
 *
 * @example
 * const users = {
 *  fred: { user: 'fred', age: 40 },
 *  pebbles: { user: 'pebbles', age: 1 }
 * }
 * mapValues(users, u => u.age); // { fred: 40, pebbles: 1 }
 */
const mapValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[k] = fn(obj[k], k, obj)
    return acc
  }, {})
