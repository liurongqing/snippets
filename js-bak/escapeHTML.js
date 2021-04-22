/**
 * 转义 HTML 中的字符串
 * @param {String} str String
 * @returns String
 * 
 * @example
 * escapeHTML('<a href="#">Me & you</a>')
 * // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
 */
const escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag] || tag)
  )
