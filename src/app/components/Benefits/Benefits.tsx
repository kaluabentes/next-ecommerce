import ContentContainer from "@/components/ContentContainer"
import { ReactNode } from "react"

interface Item {
  icon: ReactNode
  title: string
  description: string
}

interface BenefitsProps {
  items: Item[]
}

export default function Benefits({ items }: BenefitsProps) {
  return (
    <ContentContainer>
      <h1>Benefits</h1>
    </ContentContainer>
  )
}
