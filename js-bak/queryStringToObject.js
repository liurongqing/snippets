/**
 * 查询字符串对象
 * @param {String} url URL
 * @returns Object
 * 
 * @example
 * queryStringToObject('https://google.com?page=1&count=10')
 * // {page: '1', count: '10'}
 */
const queryStringToObject = (url) =>
  [...new URLSearchParams(url.split('?')[1])].reduce(
    (a, [k, v]) => ((a[k] = v), a),
    {}
  )
