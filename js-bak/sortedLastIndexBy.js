/**
 * 根据迭代器函数，保持排序的情况下插入一个值
 * @param {Array} arr
 * @param {Object} n
 * @param {Function} fn
 * @returns
 *
 * @example
 * sortedLastIndexBy([{ x: 4 }, { x: 5 }], { x: 4 }, o => o.x); // 1
 */
const sortedLastIndexBy = (arr, n, fn) => {
  const isDescending = fn(arr[0]) > fn(arr[arr.length - 1])
  const val = fn(n)
  const index = arr
    .map(fn)
    .reverse()
    .findIndex((el) => (isDescending ? val <= el : val >= el))
  return index === -1 ? 0 : arr.length - index
}
