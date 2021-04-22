/**
 * 提供的函数作用于2个数组元素中， 返回两个数组之间的对称差，（a不在B中的元素，B不在A中的元素）
 * @param {Array} a
 * @param {Array} b
 * @param {Function} fn
 * @returns
 *
 * @example
 * symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor); // [ 1.2, 3.4 ]
 * symmetricDifferenceBy(
 *  [{ id: 1 }, { id: 2 }, { id: 3 }],
 *  [{ id: 1 }, { id: 2 }, { id: 4 }],
 *  i => i.id
 * )
 * // [{ id: 3 }, { id: 4 }]
 */
const symmetricDifferenceBy = (a, b, fn) => {
  const sA = new Set(a.map((v) => fn(v))),
    sB = new Set(b.map((v) => fn(v)))

  return [
    ...a.filter((x) => !sB.has(fn(x))),
    ...b.filter((x) => !sA.has(fn(x))),
  ]
}
