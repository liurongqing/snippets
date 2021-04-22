/**
 * 数据属性排序
 * @param {Array} arr
 * @param {String} prop
 * @param {Array} order
 * @returns
 *
 * @example
 * const users = [
 *  { name: 'fred', language: 'Javascript' },
 *  { name: 'barney', language: 'TypeScript' },
 *  { name: 'frannie', language: 'Javascript' },
 *  { name: 'anna', language: 'Java' },
 *  { name: 'jimmy' },
 *  { name: 'nicky', language: 'Python' },
 * ]
 * orderWith(users, 'language', ['Javascript', 'TypeScript', 'Java']);
 * [
 *  { name: 'fred', language: 'Javascript' },
 *  { name: 'frannie', language: 'Javascript' },
 *  { name: 'barney', language: 'TypeScript' },
 *  { name: 'anna', language: 'Java' },
 *  { name: 'jimmy' },
 *  { name: 'nicky', language: 'Python' }
 * ]
 */

const orderWith = (arr, prop, order) => {
  const orderValue = order.reduce((acc, v, i) => {
    acc[v] = i
    return acc
  }, {})

  return [...arr].sort((a, b) => {
    if (orderValue[a[prop]] === undefined) return 1
    if (orderValue[b[prop]] === undefined) return -1
    return orderValue[a[prop]] - orderValue[b[prop]]
  })
}
