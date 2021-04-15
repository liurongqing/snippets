/**
 * 函数映射对象的键，生成一个新对象
 * @param {Object} obj 原对象
 * @param {Function} fn 函数
 * @returns 新键的数组
 * 
 * @example
 * mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
 */
const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k]
    return acc
  }, {})
