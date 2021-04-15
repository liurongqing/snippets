/**
 * 深度映射对象的键
 * @param {Object} obj 原对象
 * @param {Function} fn 函数
 * @returns 新对象
 *
 * @example
 * const obj = {
 *  foo: '1',
 *  nested: {
 *    child: 123
 *  }
 * }
 * const upperKeysObj = deepMapKeys(obj, key => key.toUpperCase());
 * {
 *  FOO: '1',
 *  NESTED: {
 *    CHILD: 123
 *  }
 * }
 */
const deepMapKeys = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map((val) => deepMapKeys(val, fn))
    : typeof obj === 'object'
    ? Object.keys(obj).reduce((acc, current) => {
        const key = fn(current)
        const val = obj[current]
        acc[key] =
          val !== null && typeof val === 'object' ? deepMapKeys(val, fn) : val

        return acc
      }, {})
    : obj
