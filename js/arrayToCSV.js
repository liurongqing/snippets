/**
 * 将 2D 数组转换为逗号分隔值字符串
 * @param {Array} arr
 * @param {String} delimiter
 * @returns
 *
 * @example
 * arrayToCSV([['a', 'b'], ['c', 'd']]) // '"a","b"\n"c","d"'
 * arrayToCSV([['a', 'b'], ['c', 'd']], ';') // '"a";"b"\n"c";"d"'
 * arrayToCSV([['a', '"b" great'], ['c', 3.1415]])
 * // '"a","""b"" great"\n"c",3.1415'
 */
const arrayToCSV = (arr, delimiter = ',') =>
  arr
    .map((v) => v.map((x) => (isNaN(x) ? `"${x.replace(/" /g, '""')}"` : x)))
    .join(delimiter)
    .join('\n')
