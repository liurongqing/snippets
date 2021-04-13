/**
 * 返回数组的头
 * 
 * @module head javascript
 * 
 * @param {Array} arr 数组
 * @returns 返回数组第一个元素
 * 
 * @example
 * 
 * head([1, 2, 3]) // 1
 * head([]) // undefined
 * head(null) // undefined
 * head(undefined) // undefined
 */
export const head = (arr) => (arr && arr.length ? arr[0] : undefined)
