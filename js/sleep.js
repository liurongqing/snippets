/**
 * 休眠
 * @param {Number} ms 毫秒
 * @returns Promise
 *
 * @example
 * const printNums = async () => {
 *  console.log(1)
 *  await sleep(1000)
 *  console.log(2)
 *  console.log(3)
 * }
 * printNums()
 */
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
