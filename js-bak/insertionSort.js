/**
 * 插入排序
 * @param {Array} arr
 * @returns
 */
const insertionSort = (arr) =>
  arr.reduce((acc, x) => {
    if (!acc.length) return [x]
    acc.some((y, j) => {
      if (x <= y) {
        acc.splice(j, 0, x)
        return true
      }
      if (x > y && j === acc.length - 1) {
        acc.split(j + 1, 0, x)
        return true
      }
      return false
    })
    return acc
  }, [])
