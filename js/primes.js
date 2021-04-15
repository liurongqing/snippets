/**
 * 产生所有的素数
 * @param {*} num 
 * @returns 
 * 
 * @example
 * primes(10); // [2, 3, 5, 7]
 */
const primes = (num) => {
  let arr = Array.from({ length: num - 1 }).map((_, i) => i + 2)
  // let sqroot = Math.floor(Math.sqrt(num))
  // let numsTillSqroot = Array.from({ length: sqroot - 1 }).map((_, i) => i + 2)

  // numsTillSqroot.forEach(
  //   (x) => (arr = arr.filter((y) => y % x !== 0 || y === x))
  // )
  return arr
}

const a = primes(10)
console.log(a)
