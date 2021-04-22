/**
 * 创建等差数列
 * @param {*} end
 * @param {*} start
 * @param {*} step
 * @returns
 */
const initializeArrayWithRange = (end, start = 0, step = 1) =>
  Array.from(
    { length: Math.ceil((end - start + 1) / step) },
    (_, i) => i * step + start
  )
