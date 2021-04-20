/**
 * 几何数级数组
 * @param {Number} end
 * @param {Number} start
 * @param {Number} step
 * @returns
 *
 * @example
 * geometricProgression(256); // [1, 2, 4, 8, 16, 32, 64, 128, 256]
 * geometricProgression(256, 3); // [3, 6, 12, 24, 48, 96, 192]
 * geometricProgression(256, 1, 4); // [1, 4, 16, 64, 256]
 */
const geometricProgression = (end, start = 1, step = 2) =>
  Array.from({
    length: Math.floor(Math.log(end / start) / Math.log(step)) + 1,
  }).map((_, i) => start * step ** i)
