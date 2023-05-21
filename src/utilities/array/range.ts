export default function range(length: number) {
  return Array(length)
    .fill(null)
    .map((_, index: number) => index + 1)
}
