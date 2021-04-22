/**
 * 根据提供函数，对比两个对象
 * @param {*} obj
 * @param {*} source
 * @param {*} fn
 * @returns
 */
const matchesWith = (obj, source, fn) =>
  Object.keys(source).every((key) =>
    obj.hasOwnProperty(key) && fn
      ? fn(obj[key], source[key], key, obj, source)
      : obj[key] == source[key]
  )
