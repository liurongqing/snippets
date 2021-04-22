/**
 * 对象中的每个键应用到一个函数中
 * @param {Object} obj
 * @param {Function} fn
 * @param {Object} acc
 * @returns
 *
 * @example
 * transform(
 *   { a: 1, b: 2, c: 1 },
 *   (r, v, k) => {
 *     (r[v] || (r[v] = [])).push(k);
 *     return r;
 *   },
 *   {}
 * ) // { '1': ['a', 'c'], '2': ['b'] }
 */
const transform = (obj, fn, acc) =>
  Object.keys(obj).reduce((a, k) => fn(a, obj[k], k, obj), acc)
