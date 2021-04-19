/**
 * 对返回新值进行分隔
 * @param {Array} arr
 * @param {Function} fn
 * @returns
 *
 * @example
 * const numbers = [1, 1, 3, 3, 4, 5, 5, 5]
 * partitionBy(numbers, n => n % 2 === 0) // [[1, 1, 3, 3], [4], [5, 5, 5]]
 * partitionBy(numbers, n => n) // [[1, 1], [3, 3], [4], [5, 5, 5]]
 */

const partitionBy = (arr, fn) =>
  arr.reduce(
    ({ res, last }, v, i, a) => {
      console.log(last)
      const next = fn(v, i, a)
      if (next !== last) res.push([v])
      else res[res.length - 1].push(v)
      return { res, last: next }
    },
    { res: [] }
  ).res
