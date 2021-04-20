/**
 * 返回数组的幂集
 * @param {Array} arr
 * @returns
 *
 * @example
 * powerset([1, 2]); // [[], [1], [2], [2, 1]]
 */
const powerset = (arr) =>
  arr.reduce((a, v) => a.concat(a.map((r) => [v].concat(r))), [[]])
