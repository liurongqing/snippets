/**
 * 查找给定字符串中子字符串的所有索引
 * @param {String} str 原字符串
 * @param {String} searchValue 需要搜索的子字符串
 * @returns Array
 * 
 * @example
 * [...indexOfSubstrings('tiktok tok tok tik tok tik', 'tik')]; // [0, 15, 23]
 */
const indexOfSubstrings = function* (str, searchValue) {
  let i = 0
  while (true) {
    const r = str.indexOf(searchValue, i)
    if (r !== -1) {
      yield r
      i = r + 1
    } else return
  }
}
