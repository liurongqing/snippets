/**
 * 计算两个数组的笛卡尔积
 * @param {Array} a
 * @param {Array} b
 * @returns
 *
 * @example
 * cartesianProduct(['x', 'y'], [1, 2]);
 * // [['x', 1], ['x', 2], ['y', 1], ['y', 2]]
 */
const cartesianProduct = (a, b) =>
  a.reduce((p, x) => [...p, ...b.map((y) => [x, y])], [])
