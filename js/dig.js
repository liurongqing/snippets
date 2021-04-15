/**
 * 根据给定的键获取嵌套JSON对象中的目标值。
 * @param {Object} obj Object
 * @param {Object} target Object
 * @returns
 * 
 * @example
 * const data = {
 *  level1: {
 *    level2: {
 *      level3: 'some data'
 *    }
 *  }
 * }
 * dig(data, 'level3'); // 'some data'
 * dig(data, 'level4'); // undefined
 */
const dig = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc
        if (typeof val === 'object') return dig(val, target)
      }, undefined)
