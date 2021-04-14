/**
 * 根据提供的键映射，替换掉原对象的键的名称
 * @param {Object} keysMap 映射键
 * @param {Object} obj 原对象
 * @returns 新对象
 * 
 * @example
 * const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 }
 * renameKeys({ name: 'firstName', job: 'passion' }, obj)
 * // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
 */
const renameKeys = (keysMap, obj) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {}
  )
