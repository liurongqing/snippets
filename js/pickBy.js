/**
 * 由给定函数返回的属性组成的对象
 * @param {Object} obj 原对象
 * @param {Function} fn 过滤函数
 * @returns 新对象
 * 
 * @example
 * pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number')
 * // { 'a': 1, 'c': 3 }
 */
const pickBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
