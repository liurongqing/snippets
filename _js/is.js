export const is = (type, val) =>
  ![, null].includes(val) && val.constructor === type
