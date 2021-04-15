/**
 * 同一个节点监听多个事件
 * @param {Element} el 节点
 * @param {Array}} types 事件数组
 * @param {Function} listener 函数
 * @param {Object} options
 * @param {Object} useCapture
 * 
 * @example
 * addMultipleListeners(
 *  document.querySelector('.my-element'),
 *  ['click', 'mousedown'],
 *  () => { console.log('hello!') }
 * )
 */
const addMultipleListeners = (el, types, listener, options, useCapture) => {
  types.forEach((type) =>
    el.addEventListener(type, listener, options, useCapture)
  )
}
