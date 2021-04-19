/**
 * 将数字转成数组
 * @param {Number} n
 * @returns
 *
 * digitize(123); // [1, 2, 3]
 * digitize(-123); // [1, 2, 3]
 */
const digitize = (n) => [...`${Math.abs(n)}`].map((i) => parseFloat(i))
