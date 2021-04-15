/**
 * 根据给定的函数进行分组，并返回每个分组的元素个数
 * @param {Array} arr 原数组
 * @param {Function|String} fn 函数或一个属性
 * @returns 新数组
 * 
 * @example
 * countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
 * countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
 * countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count)
 * // {5: 2, 10: 1}
 */
const countBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
