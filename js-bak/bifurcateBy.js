/**
 * 根据给定筛选函数的结果将值拆分为两组
 * @param {Array} arr 原数组
 * @param {Function} fn 函数
 * @returns 新数组
 * 
 * @example
 * bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b')
 * // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1], acc), [[], []])
