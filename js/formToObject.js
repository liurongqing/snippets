/**
 * 表单数据转成对象
 * @param {Form} form
 * @returns
 *
 * @example
 * formToObject(document.querySelector('#form'));
 * // { email: 'test@email.com', name: 'Test Name' }
 */
const formToObject = (form) =>
  Array.from(new FormData(form)).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key]: value,
    }),
    {}
  )
