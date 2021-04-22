/**
 * 树状结构
 * @param {Array} items
 * @param {Number} id
 * @param {String} link
 * @returns
 *
 * @example
 * const comments = [
 *  { id: 1, parent_id: null },
 *  { id: 2, parent_id: 1 },
 *  { id: 3, parent_id: 1 },
 *  { id: 4, parent_id: 2 },
 *  { id: 5, parent_id: 4 },
 *  { id: 8, parent_id: null },
 * ]
 * const nestedComments = nest(comments)
 * console.log(nestedComments)
 */
const nest = (items, id = null, link = 'parent_id') =>
  items
    .filter((item) => item[link] === id)
    .map((item) => ({ ...item, children: nest(items, item.id, link) }))
