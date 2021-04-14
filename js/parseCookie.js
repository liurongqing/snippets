/**
 * 解析 cookie 字符串
 * @param {String} str cookie 字符串
 * @returns 对象
 *
 * @example
 * parseCookie('foo=bar; equation=E%3Dmc%5E2')
 * // { foo: 'bar', equation: 'E=mc^2' }
 */
const parseCookie = (str) =>
  str
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] =
        acc[decodeURIComponent[v[1].trim()]]
      return acc
    }, {})
