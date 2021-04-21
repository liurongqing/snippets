/**
 * 链式异步函数
 * @param {*} fns 
 */
const chainAsync = (fns) => {
  let curr = 0
  const last = fns[fns.length - 1]
  const next = () => {
    const fn = fns[curr++]
    fn === last ? fn() : fn(next)
  }
  next()
}
