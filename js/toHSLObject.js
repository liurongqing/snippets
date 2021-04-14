/**
 * 将 hsl 颜色字符串转换成具有每种颜色值的对象
 * @param {String} hslStr hsl颜色字符串
 * @returns Object
 *
 * @example
 * toHSLObject('hsl(50, 10%, 10%)')
 * // { hue: 50, saturation: 10, lightness: 10 }
 */
const toHSLObject = (hslStr) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number)
  return { hue, saturation, lightness }
}
