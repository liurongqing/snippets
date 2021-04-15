/**
 * 获取所有兄弟元素
 * @param {Element} el 节点
 * @returns 数组
 * 
 * @example
 * getSiblings(document.querySelector('head')); // ['body']
 */
const getSiblings = (el) =>
  [...el.parentNode.childNodes].filter((node) => node !== el)


