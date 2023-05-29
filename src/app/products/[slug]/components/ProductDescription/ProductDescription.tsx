"use client"

import { Container } from "./ProductDescription.styles"

interface ProductDescriptionProps {
  content: string
}

export default function ProductDescription({
  content,
}: ProductDescriptionProps) {
  return <Container dangerouslySetInnerHTML={{ __html: content }} />
}
