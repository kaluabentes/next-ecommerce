"use client"

import ContentContainer from "@/components/ContentContainer"
import { Content, Title } from "./PageContent.styles"

interface PageContentProps {
  title: string
  content: string
}

export default function PageContent({ title, content }: PageContentProps) {
  return (
    <ContentContainer size="md">
      <Title>{title}</Title>
      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </ContentContainer>
  )
}
