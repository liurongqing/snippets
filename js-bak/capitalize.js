/**
 * 首字母大写
 * @param {*} param0
 * @param {*} lowerRest
 * @returns
 */
const capitalize = ([first, ...rest], lowerRest = false) =>
  first.toUpperCase() +
  (lowerRest ? rest.join('').toLowerCase() : rest.join(''))
