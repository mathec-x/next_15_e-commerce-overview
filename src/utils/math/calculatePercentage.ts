export const calculatePercentage = (originalPrice = 0, price = 0) => {
  return Math.round(((originalPrice - price) / originalPrice) * 100)
}