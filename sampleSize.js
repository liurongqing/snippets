/**
 * 随机打乱，并取 n 个出来
 * @param {Array} param0
 * @param {Number} n
 * @returns
 *
 * @example
 * sampleSize([1, 2, 3], 2); // [3, 1]
 * sampleSize([1, 2, 3], 4); // [2, 3, 1]
 */
const sampleSize = ([...arr], n = 1) => {
  let m = arr.length
  while (m) {
    const i = Math.floor(Math.random() * m--)
    ;[arr[m], arr[i]] = [arr[i], arr[m]]
  }
  return arr.slice(0, n)
}
