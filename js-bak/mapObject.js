/**
 * 使用函数将数组的值映射到对象
 * @param {Array} arr 原数组
 * @param {Function} fn 函数
 * @returns 新对象
 * 
 * @example
 * mapObject([1, 2, 3], a => a * a); // { 1: 1, 2: 4, 3: 9 }
 */
const mapObject = (arr, fn) =>
  arr.reduce((acc, el, i) => {
    acc[el] = fn(el, i, arr)
    return acc
  }, {})
