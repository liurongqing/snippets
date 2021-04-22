/**
 * 创建叠加数组
 * @param  {...any} nums
 * @returns
 */
const accumulate = (...nums) =>
  nums.reduce((acc, n) => [...acc, n + +acc.slice(-1)], [])
