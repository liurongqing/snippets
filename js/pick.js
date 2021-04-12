// pick({ a: 1, b: '2', c: 3 }, ['a', 'c']); // { 'a': 1, 'c': 3 }
/**
 * @param {*} obj 
 * @param {*} arr 
 * @returns 
 * 
 * @example
 * ```ts
 * console.log('2...')
 * ```
 */
export const pick = (obj, arr) =>
  arr.reduce((acc, curr) => (curr in acc && (acc[curr] = obj[curr]), acc), {})
