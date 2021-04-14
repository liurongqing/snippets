/**
 * 桶排序
 * @param {Array} arr 要排序的数组
 * @param {Number} size 桶大小
 * @returns 新数组
 *
 * @example
 * bucketSort([6, 3, 4, 1]) // [1, 3, 4, 6]
 */
const bucketSort = (arr, size = 5) => {
  const min = Math.min(...arr)
  const max = Math.max(...arr)
  const buckets = Array.from(
    { length: Math.floor((max - min) / size) + 1 },
    () => []
  )
  arr.forEach((val) => {
    buckets[Math.floor((val - min) / size)].push(val)
  })
  return buckets.reduce((acc, b) => [...acc, ...b.sort((a, b) => a - b)], [])
}
