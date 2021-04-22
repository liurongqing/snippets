/**
 * 从左到右执行函数
 * @param  {...any} fns 
 * @returns 
 */
const pipeFunctions = (...fns) =>
  fns.reduce((f, g) => (...args) => g(f(...args)))
