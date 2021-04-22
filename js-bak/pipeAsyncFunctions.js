/**
 * 为异步函数执行从左到右的复合函数
 * @param  {...any} fns 函数集合
 * @returns any
 * 
 * @example
 * const sum = pipeAsyncFunctions(
 *  x => x + 1,
 *  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
 *  x => x + 3,
 *  async x => (await x) + 4
 * )
 * (async() => {
 *  console.log(await sum(5)); // 15 (after one second)
 * })()
 */
const pipeAsyncFunctions = (...fns) => (arg) =>
  fns.reduce((p, f) => p.then(f), Promise.resolve(arg))
