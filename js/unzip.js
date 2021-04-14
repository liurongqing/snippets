/**
 * 重组数组
 * @param {Array} arr 重组的数组
 * @returns 新数组
 *
 * @example
 * unzip([
 *  ['a', 1, true],
 *  ['b', 2, false]
 * ])
 * // [['a', 'b'], [1, 2], [true, false]]
 * unzip([
 *  ['a', 1, true],
 *  ['b', 2]
 * ])
 * // [['a', 'b'], [1, 2], [true]]
 */
const unzip = (arr) =>
  arr.reduce(
    (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
    Array.from({
      length: Math.max(...arr.map((x) => x.length)),
    }).map((x) => [])
  )
