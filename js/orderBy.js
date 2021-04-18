/**
 * 多重排序
 * TODO 不理解
 * @param {Array}} arr
 * @param {Array} props
 * @param {Array} orders
 * @returns
 * 
 * @example
 * const users = [
 *  { name: 'fred', age: 48 },
 *  { name: 'barney', age: 36 },
 *  { name: 'fred', age: 40 },
 * ]
 * orderBy(users, ['name', 'age'], ['asc', 'desc'])
 * // [{name: 'barney', age: 36}, {name: 'fred', age: 48}, {name: 'fred', age: 40}]
 * orderBy(users, ['name', 'age'])
 * // [{name: 'barney', age: 36}, {name: 'fred', age: 40}, {name: 'fred', age: 48}]
 */
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] =
          orders && orders[i] === 'dest'
            ? [b[prop], a[prop]]
            : [a[prop], b[prop]]

        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0
      }
      return acc
    }, 0)
  )
