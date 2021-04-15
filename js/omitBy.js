/**
 * 过滤给定函数返回的对象的键相对应的键值对
 * @param {Object} obj 原对象
 * @param {Function} fn 过滤映射函数
 * @returns 新对象
 * 
 * @example
 * omitBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { b: '2' }
 */
const omitBy = (obj, fn) =>
  Object.keys(obj)
    .filter((k) => !fn(obj[k], k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
