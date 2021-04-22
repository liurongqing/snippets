/**
 * 给定日期计算分钟的日期，并返回字符串的表达形式
 * @param {Date} date
 * @param {Number} n
 * @returns
 *
 * @example
 * addMinutesToDate('2020-10-19 12:00:00', 10); // '2020-10-19 12:10:00'
 * addMinutesToDate('2020-10-19', -10); // '2020-10-18 23:50:00'
 */
const addMinutesToDate = (date, n) => {
  const d = new Date(date)
  d.setTime(d.getTime() + n * 60000)
  return d.toISOString().split('.')[0].replace('T', ' ')
}
