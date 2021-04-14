/**
 * 选择排序
 * @param {Array} arr 原数组
 * @returns 新数组
 *
 * @example
 * selectionSort([5, 1, 4, 2, 3]) // [1, 2, 3, 4, 5]
 */
const selectionSort = (arr) => {
  const a = [...arr]
  for (let i = 0; i < a.length; i++) {
    const min = a
      .slice(i + 1)
      .reduce((acc, val, j) => (val < a[acc] ? j + i + 1 : acc), i)
    if (min !== i) [a[i], a[min]] = [a[min], a[i]]
    return a
  }
}
