/**
 * 函数只被调用一次
 * @param {*} fn 
 * @returns 
 */
const once = fn => {
  let called = false;
  return function(...args) {
    if (called) return;
    called = true;
    return fn.apply(this, args);
  };
}