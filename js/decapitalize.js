/**
 * 首字母小写
 * @param {*} param0
 * @param {*} upperRest
 * @returns
 *
 * @example
 * decapitalize('FooBar'); // 'fooBar'
 * decapitalize('FooBar', true); // 'fOOBAR'
 */
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() +
  (upperRest ? rest.join('').toUpperCase() : rest.join(''))
