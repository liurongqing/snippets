const pipe = (...fns) =>
  fns.reduce((f, g) => (...args) => {
    return g(f(...args))
  })

module.exports = pipe
