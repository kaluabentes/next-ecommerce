import { remark } from "remark"
import html from "remark-html"

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  console.log("result.value.toString()", result.value.toString())
  return result.value.toString()
}
