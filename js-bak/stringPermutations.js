/**
 * 生成字符串的所有排列
 * 复杂度阶乘 n!
 * @param {String} str
 * @returns
 *
 * @example
 * stringPermutations('abc') // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']
 */
const stringPermutations = (str) => {
  if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str]
  return str
    .split('')
    .reduce(
      (acc, letter, i) =>
        acc.concat(
          stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(
            (val) => letter + val
          )
        ),
      []
    )
}
