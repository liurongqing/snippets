const bytesCount = (str) => {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    const c = str.charAt(i)
    if (/^[\u0000-\u00ff]$/.test(c)) {
      count++
    } else {
      count += 2
    }
  }
  return count
}

module.exports = bytesCount
