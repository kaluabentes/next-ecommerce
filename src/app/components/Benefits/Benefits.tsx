import { ReactNode } from "react"

import { Container, Item, Description, Title } from "./Benefits.styles"

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
    <Container>
      {items.map((item: Item) => (
        <Item>
          {item.icon}
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Item>
      ))}
    </Container>
  )
}
