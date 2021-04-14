/**
 * 将csv格式字符串转成数组对象
 * @param {String} data csv字符串
 * @param {String} delimiter 分隔符
 * @returns 数组对象
 *
 * @example
 * CSVToJSON('col1, col2\na,b\nc,d')
 * // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}]
 * CSVToJSON('col1;col2\na;b\nc;d', ';')
 * // [{'col1': 'a', 'col2': 'b'}, {'col1': 'c', 'col2': 'd'}];
 */
const CSVToJSON = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter)
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map((v) => {
      const values = v.split(delimiter)
      return titles.reduce(
        (obj, title, index) => ((obj[title] = values[index]), obj),
        {}
      )
    })
}
