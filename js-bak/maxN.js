/**
 * 返回N个最大数
 * @param {*} arr
 * @param {*} n
 * @returns
 */
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n)
