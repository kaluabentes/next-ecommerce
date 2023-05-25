"use client"

import markdownToHtml from "@/utilities/markdown/markdownToHtml"
import { Container } from "./ProductDescription.styles"

interface ProductDescriptionProps {
  content: string
}

export default async function ProductDescription({
  content,
}: ProductDescriptionProps) {
  const html = await markdownToHtml(content)

  return <Container dangerouslySetInnerHTML={{ __html: html }} />
}
