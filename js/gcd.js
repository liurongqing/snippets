/**
 * @module alg
 * 
 * @description
 * 
 * 计算两个或多个数字/数组之间的最大公约数
 */
export const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y))
  return [...arr].reduce((a, b) => _gcd(a, b))
}
