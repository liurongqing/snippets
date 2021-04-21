/**
 * 创建一个生成器，无限斯地重复给值
 * @param {*} val
 */
const repeatGenerator = function* (val) {
  let v = val
  while (true) {
    let newV = yield v
    if (newV !== undefined) v = newV
  }
}
