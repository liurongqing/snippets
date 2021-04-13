export const findKeys = (obj, val) =>
  Object.keys(obj).filter((key) => obj[key] === val)
