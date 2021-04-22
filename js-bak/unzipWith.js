/**
 * 通过函数，组合重组的值
 * @param {Array} arr 数组
 * @param {Function} fn 函数
 * @returns 新数组
 *
 * @example
 *
 * unzipWith(
 *  [
 *    [1, 10, 100],
 *    [2, 20, 200]
 *  ],
 *  (...args) => args.reduce((acc, v)=> acc + v, 0)
 * )
 * // [3, 30, 300]
 */
const unzipWith = (arr, fn) =>
  arr
    .reduce(
      (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
      Array.from({
        length: Math.max(...arr.map((x) => x.length)),
      }).map((x) => [])
    )
    .map((val) => fn(...val))

const a = unzipWith(
  [
    [1, 10, 100],
    [2, 20, 200],
  ],
  (...args) => args.reduce((acc, v) => acc + v, 0)
)
console.log(a)
