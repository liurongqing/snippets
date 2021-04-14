/**
 * 将表单数据序列化
 * @param {Object}} form form对象
 * @returns String
 *
 * @example
 * serializeForm(document.querySelector('#form'))
 * // email=test%40email.com&name=Test%20Name
 */
const serializeForm = (form) =>
  Array.from(new FormData(form), (field) =>
    field.map(encodeURIComponent).join('=')
  ).join('&')
