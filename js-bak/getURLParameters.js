/**
 * 创建一个包含URL参数的对象
 * @param {String} url URL
 * @returns Object
 *
 * @example
 * getURLParameters('google.com') // {}
 * getURLParameters('http://url.com/page?name=aDam&surname=Smith)
 * // {name: 'aDam', surname: 'Smith'}
 */
const getURLParameters = (url) =>
  url
    .match(/([^?=&])(=([^&]*))/g || [])
    .reduce(
      (a, v) => (
        (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a
      ),
      {}
    )
