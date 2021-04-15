/**
 * 根据keys数组在嵌套JSON对象中获取目标值。
 * @param {Object} obj
 * @param {Array} keys
 * @returns
 *
 * @example
 * let index = 2;
 * const data = {
 *  foo: {
 *    foz: [1, 2, 3],
 *    bar: {
 *      baz: ['a', 'b', 'c']
 *     }
 *  }
 * }
 * deepGet(data, ['foo', 'foz', index]); // get 3
 * deepGet(data, ['foo', 'bar', 'baz', 8, 'foz']); // n
 */
const deepGet = (obj, keys) =>
  keys.reduce(
    (xs, x) => (xs && xs[x] !== null && xs[x] !== undefined ? xs[x] : null),
    obj
  )
