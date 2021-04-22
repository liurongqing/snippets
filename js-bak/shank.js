/**
 *  具有与 Array.prototype.splice() 相同功能，但返回一个新数组
 * @param {Array} arr 原数组
 * @param {Number} index
 * @param {Number} delCount
 * @param  {...any} elements
 * @returns
 * 
 * @example
 * const names = ['alpha', 'bravo', 'charlie']
 * const namesAndDelta = shank(names, 1, 0, 'delta')
 * // [ 'alpha', 'delta', 'bravo', 'charlie' ]
 * const namesNoBravo = shank(names, 1, 1); // [ 'alpha', 'charlie' ]
 * console.log(names); // ['alpha', 'bravo', 'charlie']
 */
const shank = (arr, index = 0, delCount = 0, ...elements) =>
  arr
    .slice(0, index)
    .concat(elements)
    .concat(arr.slice(index + delCount))
