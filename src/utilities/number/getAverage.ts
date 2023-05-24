export default function getAverage(numbersArr: number[]) {
  const sum = numbersArr.reduce((prev, curr) => prev + curr, 0)
  return Number((sum / numbersArr.length).toFixed(1))
}
