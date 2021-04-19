/**
 * 深度合并多个对象
 * @param  {...any} objs
 * @returns
 *
 * @example
 * const object = {
 *  a: [{ x: 2 }, { y: 4 }],
 *  b: 1
 * }
 * const other = {
 *  a: { z: 3 },
 *  b: [2, 3],
 *  c: 'foo'
 * }
 * merge(object, other)
 * // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }
 */
const merge = (...objs) =>
  [...objs].reduce(
    (acc, obj) =>
      Object.keys(obj).reduce((a, k) => {
        acc[k] = acc.hasOwnProperty(k)
          ? [].concat(acc[k]).concat(obj[k])
          : obj[k]
        return acc
      }, {}),
    {}
  )
