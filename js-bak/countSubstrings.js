/**
 * 计算给定字符串中子字符串的出现次数。
 * @param {String} str 主字符串
 * @param {String} searchValue 子字符串
 * @returns 次数
 */
const countSubstrings = (str, searchValue) => {
  let count = 0,
    i = 0

  while (true) {
    const r = str.indexOf(searchValue, i)
    if (r !== -1) [count, i] = [count + 1, i + 1]
    else return count
  }
}
