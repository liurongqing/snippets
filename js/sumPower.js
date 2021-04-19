/**
 * 计算从 start 到 end 的所有数字的幂的和
 * @param {Number} end
 * @param {Number} power
 * @param {Number} start
 * @returns
 *
 * @example
 * sumPower(10); // 385
 * sumPower(10, 3); // 3025
 * sumPower(10, 3, 5); // 2925
 */
const sumPower = (end, power = 2, start = 1) =>
  Array(end + 1 - start)
    .fill(0)
    .map((x, i) => (i + start) ** power)
    .reduce((a, b) => a + b, 0)
