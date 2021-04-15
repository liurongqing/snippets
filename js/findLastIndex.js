/**
 * 查找提供的函数为其返回真值的最后一个元素的索引。
 * @param {Array} arr
 * @param {Function} fn
 * @returns
 *
 * @example
 * findLastIndex([1, 2, 3, 4], n => n % 2 === 1); // 2 (index of the value 3)
 * findLastIndex([1, 2, 3, 4], n => n === 5); // -1 (default value when not found)
 */
const findLastIndex = (arr, fn) =>
  (arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop() || [-1])[0]
