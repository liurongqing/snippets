/**
 * 检查 JSON 对象中是否存在目标值
 * @param {Object} obj
 * @param {*} keys
 * @returns
 */
const hasKey = (obj, keys) => {
  return (
    keys.length > 0 &&
    keys.every((key) => {
      if (typeof obj !== 'object' || !obj.hasOwnproperty(key)) return false
      obj = obj[key]
      return true
    })
  )
}
