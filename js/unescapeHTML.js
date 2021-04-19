/**
 * 转义 HTML 字符
 * @param {String} str 
 * @returns 
 */
const unescapeHTML = (str) =>
  str.replace(
    /&amp;|&lt;|&gt;|&#39;|&quot;/g,
    (tag) =>
      ({
        '&amp;': '&',
        '&lt;': '<',
        '&gt;': '>',
        '&#39;': "'",
        '&quot;': '"',
      }[tag] || tag)
  )
