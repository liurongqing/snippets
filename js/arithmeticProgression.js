/**
 * 生成等差数列的数组
 * @param {Number} n
 * @param {Number} lim
 * @returns
 *
 * @example
 * arithmeticProgression(5, 25); // [5, 10, 15, 20, 25]
 */
const arithmeticProgression = (n, lim) =>
  Array.from({ length: Math.ceil(lim / n) }, (_, i) => (i + 1) * n)
