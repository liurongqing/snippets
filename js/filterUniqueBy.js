/**
 * 过滤唯一值
 * @param {*} arr 
 * @param {*} fn 
 * @returns 
 */
const filterUniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.some((x, j) => (i !== j) === fn(v, x, i, j)))
