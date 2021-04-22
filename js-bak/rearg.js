/**
 * 根据索引重新排列
 * @param {Function} fn
 * @param {Array} indexes
 * @returns
 *
 * @example
 * var rearged = rearg(
 *  function(a, b, c) {
 *    return [a, b, c];
 *  },
 *  [2, 0, 1]
 * )
 * rearged('b', 'c', 'a'); // ['a', 'b', 'c']
 */
const rearg = (fn, indexes) => (...args) => fn(...indexes.map((i) => args[i]))
