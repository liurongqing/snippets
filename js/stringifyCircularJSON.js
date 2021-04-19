/**
 * 包含循环引用的 JSON 对象，序列化为 JSON 格式
 * @param {Object} obj
 * @returns
 *
 * @example
 * const obj = { n: 42 }
 * obj.obj = obj
 * stringifyCircularJSON(obj) // '{"n": 42}'
 */
const stringifyCircularJSON = (obj) => {
  const seen = new WeakSet()
  return JSON.stringify(obj, (k, v) => {
    if (v !== null && typeof v === 'object') {
      if (seen.has(v)) return
      seen.add(v)
    }
    return v
  })
}
