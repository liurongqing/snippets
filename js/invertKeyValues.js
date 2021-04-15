/**
 * 反转对象的键/值对，而不对其进行突变
 * @param {Object} obj 原对象
 * @param {Function} fn 映射函数
 * @returns 新对象
 * 
 * @example
 * invertKeyValues({ a: 1, b: 2, c: 1 }); // { 1: [ 'a', 'c' ], 2: [ 'b' ] }
 * invertKeyValues({ a: 1, b: 2, c: 1 }, value => 'group' + value);
 * // { group1: [ 'a', 'c' ], group2: [ 'b' ] }
 */
const invertKeyValues = (obj, fn) =>
  Object.keys(obj).reduce((acc, key) => {
    const val = fn ? fn(obj[key]) : obj[key]
    acc[val] = acc[val] || []
    acc[val].push(key)
    return acc
  }, {})
