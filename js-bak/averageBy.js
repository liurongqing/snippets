/**
 * 根据属性或函数返回值，并求平均数
 * @param {Array} arr
 * @param {Function|String} fn
 * @returns
 *
 * @example
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n); // 5
 * averageBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 5
 */
const averageBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0) / arr.length
