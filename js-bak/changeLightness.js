/**
 * 更改 hsl 颜色字符串的明度值
 * @param {Number} delta 明度改变的值大小
 * @param {String} hslStr hsl 颜色字符串
 * @returns 新的 hslStr
 *
 * @example
 * changeLightness(10, 'hsl(330, 50%, 50%)') // 'hsl(330, 50%, 60%)'
 * changeLightness(-10, 'hsl(330, 50%, 50%)') // 'hsl(330, 50%, 40%)'
 */
const changeLightness = (delta, hslStr) => {
  const [hue, saturation, lightness] = hslStr.match(/\d+/g).map(Number)
  const newLightness = Math.max(0, Math.min(100, lightness + parseFloat(delta)))
  return `hsl(${hue}, ${saturation}%, ${newLightness}%)`
}
