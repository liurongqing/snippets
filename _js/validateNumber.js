export const validateNumber = (n) => {
  const num = parseFloat(n)
  return !Number.isNaN(num) && Number.isFinite(num) && Number(n) == n
}
