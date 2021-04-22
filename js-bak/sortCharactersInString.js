/**
 * 字符串进行排序
 * @param {*} str
 * @returns
 */
const sortCharactersInString = (str) =>
  [...str].sort((a, b) => a.localeCompare(b)).join('')
