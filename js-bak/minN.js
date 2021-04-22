/**
 * 返回N个最小数
 * @param {*} arr
 * @param {*} n
 * @returns
 */
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n)
