/**
 * 创建元素数组
 * @param  {...any} arrays
 * @returns
 *
 * @example
 * zip(['a', 'b'], [1, 2], [true, false]); // [['a', 1, true], ['b', 2, false]]
 * zip(['a'], [1, 2], [true, false]); // [['a', 1, true], [undefined, 2, false]]
 */
const zip = (...arrays) => {
  const maxLength = Math.max(...arrays.map((x) => x.length))
  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arrays.length }, (_, k) => arrays[k][i])
  })
}
