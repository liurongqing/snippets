export const isAsyncFunction = (val) =>
  Object.prototype.toString.call(val) === '[object AsyncFunction]'
