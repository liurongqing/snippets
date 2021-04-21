/**
 * 组合2个对象
 * @param {*} a
 * @param {*} b
 * @param {*} prop
 * @returns
 */
const combine = (a, b, prop) =>
  Object.values(
    [...a, ...b].reduce((acc, v) => {
      if (v[prop])
        acc[v[prop]] = acc[v[prop]] ? { ...acc[v[prop]], ...v } : { ...v }
      return acc
    }, {})
  )
