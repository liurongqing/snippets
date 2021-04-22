/**
 * 计算任意维度的2个点的距离
 * @param {Array} a
 * @param {Array} b
 * @returns
 *
 * @example
 * euclideanDistance([1, 1], [2, 3]); // ~2.2361
 * euclideanDistance([1, 1, 1], [2, 3, 2]); // ~2.4495
 */
const euclideanDistance = (a, b) =>
  Math.hypot(...Object.keys(a).map((k) => b[k] - a[k]))
