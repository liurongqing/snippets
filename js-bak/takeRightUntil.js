/**
 * 根据指定函数，从末尾开始，不满足条件的全删除掉
 * @param {Array} arr
 * @param {Function} fn
 * @returns
 */
const takeRightUntil = (arr, fn) => {
  for (const [i, val] of [...arr].reverse().entries())
    if (fn(val)) return i === 0 ? [] : arr.slice(-i)
  return arr
}
