export const isArrayLike = (obj) =>
  obj != null && typeof obj[Symbol.iterator] === 'function'
