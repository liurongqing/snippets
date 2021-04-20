/**
 * 冒泡排序
 * @param {Array} arr
 * @returns
 */
const bubbleSort = (arr) => {
  let swapped = false
  const a = [...arr]
  for (let i = 1; i < a.length - 1; i++) {
    swapped = false
    for (let j = 0; j < a.length - i; j++) {
      if (a[j + 1] < a[j]) {
        ;[a[j], a[j + 1]] = [a[j + 1], a[j]]
        swapped = true
      }
    }
    if (!swapped) return a
  }
  return a
}
