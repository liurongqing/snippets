/**
 * 连接字符
 * @param {*} arr 
 * @param {*} separator 
 * @param {*} end 
 * @returns 
 */
const join = (arr, separator = ',', end = separator) =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 2
        ? acc + val + end
        : i === arr.length - 1
        ? acc + val
        : acc + val + separator,
    ''
  )
