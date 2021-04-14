/**
 * 深度删除对象或数组中的假值
 * @param {Object} val 对象或数组
 * @returns 对象或数组
 *
 * @example
 * const obj = {
 *  a: null,
 *  b: false,
 *  c: true,
 *  d: 0,
 *  e: 1,
 *  f: '',
 *  g: 'a',
 *  h: [null, false, '', true, 1, 'a'],
 *  i: { j: 0, k: false, l: 'a' }
 * }
 * compactObject(obj)
 * // { c: true, e: 1, g: 'a', h: [ true, 1, 'a' ], i: { l: 'a' } }
 */
const compactObject = (val) => {
  const data = Array.isArray(val) ? val.filter(Boolean) : val
  return Object.keys(data).reduce(
    (acc, key) => {
      const value = data[key]
      if (value)
        acc[key] = typeof value === 'object' ? compactObject(value) : value
      return acc
    },
    Array.isArray(val) ? [] : {}
  )
}
