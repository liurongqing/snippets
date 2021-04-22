/**
 * 获取每个值出现的次数
 * @param {Array} arr
 * @return
 *
 * @example
 * frequencies(['a', 'b', 'a', 'c', 'a', 'a', 'b']); // { a: 4, b: 2, c: 1 }
 * frequencies([...'ball']); // { b: 1, a: 1, l: 2 }
 */
const frequencies = (arr) =>
  arr.reduce((a, v) => {
    a[v] = a[v] ? a[v] + 1 : 1
    return a
  }, {})
