const isEvenlyDivisible = (num, divsor) => (num % divsor === 0)

export function isLeap(year) {
  return isEvenlyDivisible(year, 4)
    && (!isEvenlyDivisible(year, 100) || isEvenlyDivisible(year, 400))
}

// on every year that is evenly divisible by 4
// except every year that is evenly divisible by 100
// unless the year is also evenly divisible by 400