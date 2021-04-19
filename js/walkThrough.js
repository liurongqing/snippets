/**
 * 创建一个生成器，遍历给定对象的的所有键的路径
 * @param {Object} obj
 */
const walkThrough = function* (obj) {
  const walk = function* (x, previous = []) {
    for (let key of Object.keys(x)) {
      if (typeof x[key] === 'object') yield* walk(x[key], [...previous, key])
      else yield [[...previous, key], x[key]]
    }
  }
  yield* walk(obj)
}
