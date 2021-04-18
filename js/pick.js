/**
 * 从对象中获取对应的键值对
 * @param {Object} obj
 * @param {Array} arr
 * @returns
 *
 * @example
 * pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
 */
const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[arr]), acc), {})
