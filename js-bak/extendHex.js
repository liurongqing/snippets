/**
 * 将3位数颜色代码扩展为6位数颜色代码
 * @param {String} shortHex
 * @returns
 *
 * @example
 * extendHex('#03f'); // '#0033ff'
 * extendHex('05a'); // '#0055aa'
 */
const extendHex = (shortHex) =>
  '#' +
  shortHex
    .slice(shortHex.startsWith('#') ? 1 : 0)
    .split('')
    .map((x) => x + x)
    .join('')
