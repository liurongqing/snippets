/**
 * 通过js复制文本
 * 
 * @param {String} str 要复制的文本
 * 
 * @example
 * copyToClipboard('this is a text')
 */
const copyToClipboard = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
