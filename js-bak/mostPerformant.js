/**
 * 返回执行最快的函数
 * @param {*} fns
 * @param {*} iterations
 * @returns
 */
const mostPerformant = (fns, iterations = 10000) => {
  const times = fns.map((fn) => {
    const before = performance.now()
    for (let i = 0; i < iterations; i++) fn()
    return performance.now() - before
  })
  return times.indexOf(Math.min(...times))
}
