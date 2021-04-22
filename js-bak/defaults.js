/**
 * 对象属性分配默认值
 * @param {Object} obj
 * @param  {...any} defs
 * @returns
 *
 * @example
 * defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 }); // { a: 1, b: 2 }
 */
const defaults = (obj, ...defs) =>
  Object.assign({}, obj, ...defs.reverse(), obj)
