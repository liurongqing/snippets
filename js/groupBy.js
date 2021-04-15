/**
 * 根据给定函数对数组进行分组
 * @param {Array} arr 原数组
 * @param {Function} fn 函数或属性
 * @returns 新数组
 * 
 * @example
 * groupBy([6.1, 4.2, 6.3], Math.floor); // {4: [4.2], 6: [6.1, 6.3]}
 * groupBy(['one', 'two', 'three'], 'length'); // {3: ['one', 'two'], 5: ['three']}
 */
const groupBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val, i) => {
      acc[val] = (acc[val] || []).concat(arr[i])
      return acc
    }, {})
