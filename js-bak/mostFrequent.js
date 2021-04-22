/**
 * 返回数组中最常见的元素
 * @param {Array} arr 原数组
 * @returns String
 * 
 * @example
 * mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // 'a'
 */
const mostFrequent = (arr) =>
  Object.entries(
    arr.reduce((a, v) => {
      a[v] = a[v] ? a[v] + 1 : 1
      return a
    }, {})
  ).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])

var a = mostFrequent(['a', 'b', 'a', 'c', 'a', 'a', 'b'])
console.log(a)
