/**
 * 将给定的字符串转换为单词数组
 * @param {String} str
 * @param {Reg} pattern
 * @returns
 */
const words = (str, pattern = /[^a-zA-Z-]+/) =>
  str.split(pattern).filter(Boolean)
