/**
 * 经过函数处理后求和
 * @param {Array} arr
 * @param {Function|String} fn
 * @returns
 *
 * @example
 * sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], x => x.n); // 20
 * sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], 'n'); // 20
 */
const sumBy = (arr, fn) =>
  arr
    .map(typeof fn === 'function' ? fn : (val) => val[fn])
    .reduce((acc, val) => acc + val, 0)
