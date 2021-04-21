/**
 * 接受可变参数函数
 * @param {*} fn
 * @returns
 */
const spreadOver = (fn) => (argsArr) => fn(...argsArr)
