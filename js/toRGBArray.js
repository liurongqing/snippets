/**
 * 将 rgb 颜色字符串转换为值的数组
 * @param {String} rgb字符串
 * 
 * @example
 * toRGBArray('rgb(255, 12, 0)'); // [255, 12, 0]
 */
const toRGBArray = (rgbStr) => rgbStr.match(/\d+/g).map(Number)
