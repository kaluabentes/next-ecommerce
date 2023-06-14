export default function subWord(text: string, start: number, end: number) {
  const words: string[] = text.split(" ")
  const subWords = words.slice(start, end)
  subWords[subWords.length - 1] = subWords[subWords.length - 1].replace(",", "")

  return `${subWords.join(" ")}...`
}
