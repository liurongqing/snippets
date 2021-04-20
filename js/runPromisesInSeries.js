/**
 * 连续运行一系列 Promise
 * @param {Promise} ps
 * @returns
 *
 * @example
 * const delay = d => new Promise(r => setTimeout(r, d));
 * runPromisesInSeries([() => delay(1000), () => delay(2000)]);
 */
const runPromisesInSeries = (ps) =>
  ps.reduce((p, next) => p.then(next), Promise.resolve())
