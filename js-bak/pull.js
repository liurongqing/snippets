/**
 * 对原始数组进行变异去掉指定的值
 * @param {Array} arr
 * @param  {...any} args
 *
 * @example
 * let myArray = ['a', 'b', 'c', 'a', 'b', 'c']
 * pull(myArray, 'a', 'c'); // myArray = [ 'b', 'b' ]
 */
const pull = (arr, ...args) => {
  let argState = Array.isArray(args[0]) ? args[0] : args
  let pulled = arr.filter((v) => !argState.includes(v))
  arr.length = 0
  pulled.forEach((v) => arr.push(v))
}
