/**
 * 对象的可枚举属性获取函数属性名
 * @param {Object} obj
 * @param {*} inherited
 * @returns
 */
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter((key) => typeof obj[key] === 'function')
