const compose = (...fns) =>
  fns.reduce((f, g) => (...args) => {
    return f(g(...args))
  })

module.exports = compose
