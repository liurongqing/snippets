/**
 * 计算2个日期间的工作日时间
 * @param {Date} startDate
 * @param {Date} endDate
 * @returns
 *
 * @example
 * countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 06, 2020')); // 1
 * countWeekDaysBetween(new Date('Oct 05, 2020'), new Date('Oct 14, 2020')); // 7
 */
const countWeekDaysBetween = (startDate, endDate) =>
  Array.from({ length: (endDate - startDate) / (1000 * 3600 * 24) }).reduce(
    (count) => {
      // getDay 方法获取当前是这周的第几天，0为星期天
      if (startDate.getDay() % 6 !== 0) count++
      startDate = new Date(startDate.setDate(startDate.getDate() + 1))
      return count
    },
    0
  )
