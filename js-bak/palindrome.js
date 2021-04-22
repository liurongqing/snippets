/**
 * 检查给定的字符串是否是回文（正反都一样的字符）
 * @param {String} str
 * @returns
 *
 * @example
 * palindrome('taco cat'); // true
 */
const palindrome = (str) => {
  const s = str.toLowerCase().replace(/[\W_]/g, '')
  return s === [...s].reverse().join('')
}
