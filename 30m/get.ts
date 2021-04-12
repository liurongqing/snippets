/**
 * 
 * @param from object
 * @param selectors string[]
 * @returns any
 * 
 * @example
 * ```ts
 * const obj = {
 *  selector: { to: { val: 'val to selector' } },
 *  target: [1, 2, { a: 'test' }]
 * }
 * 
 * get(obj, 'selector.to.val', 'target[0]', 'target[2].a')
 * ['val to select', 1, 'test']
 * ```
 */
export const get = (from: object, ...selectors: string[]) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter((t: string) => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  )