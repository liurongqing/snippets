/**
 * 将 hsl 颜色字符串转换为值的数组
 * @param {String} hslStr
 * @returns
 *
 * @example
 * toHSLArray('hsl(50, 10%, 10%)'); // [50, 10, 10]
 */
const toHSLArray = (hslStr) => hslStr.match(/\d+/g).map(Number)
