/**
 * 创建一个新字符串，其结果是在给定字符串中的每个字符上调用提供的函数。
 * @param {String} str
 * @param {Function} fn
 * @returns
 *
 * @example
 * mapString('lorem ipsum', c => c.toUpperCase()); // 'LOREM IPSUM'
 */
const mapString = (str, fn) =>
  str
    .split('')
    .map((c, i) => fn(c, i, str))
    .join('')
