/**
 * 将对象的方法绑定到对象本身
 * @param {Object} obj
 * @param  {...any} fns
 * @returns
 * 
 * @example
 * var view = {
 *   label: 'docs',
 *   click: function() {
 *     console.log('clicked ' + this.label);
 *   }
 * };
 * bindAll(view, 'click');
 * document.body.addEventListener('click', view.click);
 * // Log 'clicked docs' when clicked.
 */
const bindAll = (obj, ...fns) =>
  fns.forEach(
    (fn) => (
      (f = obj[fn]),
      (obj[fn] = function () {
        return f.apply(obj)
      })
    )
  )
