/**
 * 查找一个元素的所有祖先元素，直到被指定的选择器匹配的元素
 * @param {Element} el
 * @param {String} selector
 * @returns
 * 
 * @example
 * getParentsUntil(document.querySelector('#home-link'), 'header');
 * // [header, nav, ul, li]
 */
const getParentsUntil = (el, selector) => {
  let parents = [],
    _el = el.parentNode

  while (_el && typeof _el.matches === 'function') {
    parents.unshift(_el)
    if (_el.matches(selector)) return parents
    else _el = _el.parentNode
  }
  return []
}
