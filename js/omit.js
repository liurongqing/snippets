/**
 * 从对象中省略与给定键对应的键值对
 * @param {Object} obj
 * @param {Array} arr
 * @returns
 *
 * @example
 * omit({ a: 1, b: '2', c: 3 }, ['b']); // { 'a': 1, 'c': 3 }
 */
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter((k) => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {})
