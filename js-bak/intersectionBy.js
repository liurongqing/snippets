/**
 * 提供的函数应用于两个数组中的每个元素，求交集
 * @param {Array} a
 * @param {Array} b
 * @param {Function} fn
 * @returns
 *
 * @example
 * intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [2.1]
 */
const intersectionBy = (a, b, fn) => {
  const s = new Set(b.map(fn))
  return [...new Set(a)].filter((x) => s.has(fn(x)))
}
