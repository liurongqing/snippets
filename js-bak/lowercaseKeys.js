/**
 * 将对象的 key 全部转换成小写
 * @param {Object} obj
 * @returns
 *
 * @example
 * const myObj = { Name: 'Adam', sUrnAME: 'Smith' };
 * const myObjLower = lowercaseKeys(myObj); // {name: 'Adam', surname: 'Smith'};
 */
const lowercaseKeys = (obj) =>
  Object.keys(obj).reduce((acc, key) => {
    acc[key.toLowerCase()] = obj[key]
  }, {})
