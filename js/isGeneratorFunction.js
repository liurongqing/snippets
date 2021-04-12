export const isGeneratorFunction = (val) =>
  Object.prototype.toString.call(val) === '[object GeneratorFunction]'
