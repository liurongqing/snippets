/**
 * 从对象中检索出一组选择器的值
 *
 * @param {Object} from 一个对象
 * @param  {...any} selectors 选择器
 * @returns 数组
 *
 * @example
 * const obj = {
 *  selector: { to: { val: 'val to select' } },
 *  target: [1, 2, { a: 'test' }]
 * }
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a')
 */

const get = (from, ...selectors) =>
  [...selectors]
    .map((s) => s.replace(/\[(^\[\]*)\]/g, '.$1.'))
    .map(s => console.log('2....'))
    .split('.')
    .filter((t) => t !== '')
    .reduce((prev, cur) => prev && prev[cur], from)
