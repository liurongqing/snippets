const tofixed = (num, n = 2, fill = false) => {
  if (isNaN(num)) return num
  const newNum = Math.round((num * Math.pow(10, n + 1)) / 10) / Math.pow(10, n)
  if (fill) {
    return newNum.toFixed(n)
  }
  return newNum
}
