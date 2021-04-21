/**
 * 反转数字
 * @param {*} n
 * @returns
 */
const reverseNumber = (n) =>
  parseFloat(`${n}`.split('').reverse().join('')) * Math.sign(n)
