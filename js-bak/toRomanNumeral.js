/**
 * 数字转成罗马数字，接受介于 1 到 3999
 * @param {*} num
 * @returns
 */
const toRomanNumeral = (num) => {
  const lookup = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1],
  ]
  return lookup.reduce((acc, [k, v]) => {
    acc += k.repeat(Math.floor(num / v))
    num = num % v
    return acc
  }, '')
}
