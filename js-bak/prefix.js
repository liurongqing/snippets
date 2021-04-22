/**
 * 基于当前浏览器为 CSS 属性添加前缀
 * @param {String} prop 属性
 * @returns String
 * 
 * @example
 * prefix('appearance')
 * // 'appearance' on a supported browser, otherwise 'webkitAppearance', 'mozAppearance', 'msAppearance' or 'oAppearance'
 */
const prefix = (prop) => {
  const capitalizedProp = prop.charAt(0).toUpperCase() + prop.slice(1)
  const prefixes = ['', 'webkit', 'moz', 'ms', 'o']
  const i = prefixes.findIndex(
    (prefix) =>
      typeof document.body.style[prefix ? prefix + capitalizedProp : prop] !==
      'undefined'
  )
  return i !== -1 ? (i === 0 ? prop : prefixes[i] + capitalizedProp) : null
}

var a = prefix('appearance')
console.log(a)
