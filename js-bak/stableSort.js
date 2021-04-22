/**
 * 稳定排序，并在项的值相同时保留项的初始索引。
 * @param {Array} arr 原数组
 * @param {Function} compare 对比函数
 * @returns 新数组
 *
 * @example
 * const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * const stable = stableSort(arr, () => 0); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 */
const stableSort = (arr, compare) =>
  arr
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item)
