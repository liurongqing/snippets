/**
 * 切成块
 * @param {*} itr
 * @param {*} size
 */
const chunkify = function* (itr, size) {
  let chunk = []
  for (const v of itr) {
    chunk.push(v)
    if (chunk.length === size) {
      yield chunk
      chunk = []
    }
  }
  if (chunk.length) yield chunk
}
