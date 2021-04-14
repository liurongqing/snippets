/**
 * 检测是否按了大写锁定键
 * @param {Event} e 事件元素
 * @returns Boolean
 */
const detectCapsLock = (e) => {
  return e.getModifierState('CapsLock')
}
