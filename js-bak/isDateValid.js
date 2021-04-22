/**
 * 检查日期是否有效
 * @param  {...any} val
 * @returns
 */
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())
