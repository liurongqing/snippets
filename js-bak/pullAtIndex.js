/**
 * 通过索引去除数组
 * @param {Array} arr
 * @param {Array} pullArr
 * @returns
 *
 * @example
 * let myArray = ['a', 'b', 'c', 'd']
 * let pulled = pullAtIndex(myArray, [1, 3])
 * // myArray = [ 'a', 'c' ] , pulled = [ 'b', 'd' ]
 */
const pullAtIndex = (arr, pullArr) => {
  let removed = []
  let pulled = arr
    .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
    .filter((v, i) => !pullArr.includes(i))
  arr.length = 0
  pullArr.forEach((v) => arr.push(v))
  return removed
}
