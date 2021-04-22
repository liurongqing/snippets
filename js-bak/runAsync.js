/**
 * 通过 webworker 在单独的线程中运行函数
 * @param {Function} fn 在线程中运行的函数
 * @returns Promise
 * 
 * @example
 * const longRunningFunction = () => {
 *  let result = 0
 *  for (let i = 0; i < 1000000; i++) {
 *    result += i
 *  }
 *  return result
 * }
 * 
 * runAsync(longRunningFunction).then(console.log)
 */
const runAsync = (fn) => {
  const worker = new Worker(
    URL.createObjectURL(new Blob([`postMessage((${fn})())`]), {
      type: 'application/javascript; charset=utf-8',
    })
  )
  return new Promise((res, rej) => {
    worker.onmessage = ({ data }) => {
      res(data), worker.terminate()
    }
    worker.onerror = (err) => {
      rej(err), worker.terminate()
    }
  })
}
