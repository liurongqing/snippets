/**
 * 
 * @module node
 * @author liurongqing <phpgege@gmail.com> # 123
 * 
 * # 456
 * 
 * @param # 11 
 * 
 * # 22
 * 
 * @example
 * 
 * # 123
 * ```javascript
 * mapKeys({ a: 1, b: 2 }, (val, key) => key + val); // { a1: 1, b2: 2 }
 * ```
 */
export const mapKeys = (obj, fn) =>
  Object.keys(obj).reduce((acc, k) => {
    acc[fn(obj[k], k, obj)] = obj[k]
    return acc
  }, {})
