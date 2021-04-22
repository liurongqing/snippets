/**
 * 根据筛选器的结果将值分为两组
 * @param {Array} arr
 * @param {Array} filter
 * @returns
 *
 * @example
 * bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]);
 * // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])
