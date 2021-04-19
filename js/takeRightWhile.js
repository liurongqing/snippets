/**
 * 从末尾开始，满足条件的全部删除
 * @param {Array} arr
 * @param {Function} fn
 *
 * @example
 * takeRightWhile([1, 2, 3, 4], n => n >= 3); // [3, 4]
 */
const takeRightWhile = (arr, fn) => {
  for (const [i, val] of [...arr].reverse().entries())
    if (!fn(val)) return i === 0 ? [] : arr.slice(-i)
  return arr
}
