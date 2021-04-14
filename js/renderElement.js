/**
 * 通过一个对象结构，转化成 DOM 树
 * @param {Object} param0 类型与一些属性参数
 * @param {Element} container 节点
 * 
 * @example
 * const myElement = {
 *  type: 'button',
 *  props: {
 *    type: 'button',
 *    className: 'btn',
 *    onClick: () => alert('Clicked'),
 *    children: [{ props: { nodeValue: 'Click me' } }]
 *  }
 * }
 * renderElement(myElement, document.body)
 */
const renderElement = ({ type, props = {} }, container) => {
  const isTextElement = !type
  const element = isTextElement
    ? document.createTextNode('')
    : document.createElement(type)
  const isListener = (p) => p.startsWith('on')
  const isAttribute = (p) => !isListener && p !== 'children'

  Object.keys(props).forEach((p) => {
    if (isAttribute(p)) element[p] = props[p]
    if (!isTextElement && isListener(p)) {
      element.addEventListener(p.toLowerCase().slice(2), props[p])
    }
  })

  if (!isTextElement && props.children && props.children.length) {
    props.children.forEach((childElement) =>
      renderElement(childElement, element)
    )
  }
  container.appendChild(element)
}
