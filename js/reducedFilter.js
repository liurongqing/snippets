/**
 * 根据条件筛选对象数组，同时筛选指定的键
 * @param {Array} data 数组对象
 * @param {Array} keys 对象key的集合
 * @param {Function} fn 函数
 * @returns 过滤后的新数组对象
 * 
 * @example
 * const data = [
 *  {
 *    id: 1,
 *    name: 'john',
 *    age: 24
 *  }
 * ]
 * reducedFilter(data, ['id', 'name'], item => item.age > 20);
// [{ id: 1, name: 'john'}]
 */
const reducedFilter = (data, keys, fn) =>
  data.filter(fn).map((el) =>
    keys.reduce((acc, key) => {
      acc[key] = el[key]
      return acc
    }, {})
  )
