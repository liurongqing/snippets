/**
 * 计算最大公约数
 * @param  {...any} arr
 *
 * @example
 * gcd(8, 36) // 4
 * gcd(...[12, 8, 32]) // 4
 */
const gcd = (...arr) => {
  const _gcd = (x, y) => (!y ? x : gcd(y, x % y))
  return [...arr].reduce((a, b) => _gcd(a, b))
}
