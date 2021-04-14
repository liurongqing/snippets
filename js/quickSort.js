/**
 * 快速排序
 * @param {Array} arr 需要快速排序的数组
 * @returns 新数组
 */
const quickSort = (arr) => {
  const a = [...arr]
  if (a.length < 2) return a
  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = a[pivotIndex]
  const [lo, hi] = a.reduce(
    (acc, val, i) => {
      if (val < pivot || (val === pivot && i !== pivotIndex)) {
        acc[0].push(val)
      } else if (val > pivot) {
        acc[1].push(val)
      }
      return acc
    },
    [[], []]
  )
  return [...quickSort(lo), pivot, ...quickSort(hi)]
}

const a = quickSort([1, 6, 1, 5, 3, 2, 1, 4]) // [1, 1, 1, 2, 3, 4, 5, 6]
console.log(a)
