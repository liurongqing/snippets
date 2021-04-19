/**
 * 创建一个字符串，将大写字符转换为小写，反之亦然。
 * @param {String} str
 * @returns
 *
 * @example
 * swapCase('Hello world!'); // 'hELLO WORLD!'
 */
const swapCase = (str) =>
  [...str]
    .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
    .join('')
