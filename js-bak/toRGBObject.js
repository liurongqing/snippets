/**
 * 将 rgb 颜色字符串转换成具有每种颜色值的对象
 * @param {String} rgbStr rgb字符串
 * @returns Object
 *
 * @example
 * toRGBObject('rgb(255, 12, 0)') // {red: 255, green: 12, blue: 0}
 */
const toRGBObject = (rgbStr) => {
  const [red, green, blue] = rgbStr.match(/\d+/g).map(Number)
  return { red, green, blue }
}
