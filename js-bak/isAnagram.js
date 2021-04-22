/**
 * 检查一个字符串是否是另一个字符串的回文
 * @param {String} str1
 * @param {String} str2
 * @returns
 */
const isAnagram = (str1, str2) => {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/gi, '')
      .split('')
      .sort()
      .join('')
  return normalize(str1) === normalize(str2)
}
