/**
 * 将给定数组简化为值散列
 * @param {Array} object
 * @param {String} key
 * @returns
 *
 * @example
 * toHash([4, 3, 2, 1]); // { 0: 4, 1: 3, 2: 2, 3: 1 }
 * toHash([{ a: 'label' }], 'a'); // { label: { a: 'label' } }
 */
const toHash = (object, key) =>
  Array.prototype.reduce.call(
    object,
    (acc, data, index) => ((acc[!key ? index : data[key]] = data), acc),
    {}
  )
