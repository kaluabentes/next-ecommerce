"use client"

import { ReactNode } from "react"
import {
  Container,
  Content,
  Header,
  Image,
  Item,
} from "./OptionsAccordion.styles"

import RadioInput from "../RadioInput"
import OptionsAccordionProvider, {
  useOptionsAccordion,
} from "./OptionsAccordionProvider"

interface OptionsAccordionItemProps {
  header?: ReactNode
  children?: ReactNode
  index: number
}

export function OptionsAccordionItem({
  header,
  children,
  index,
}: OptionsAccordionItemProps) {
  const { optionsAccordion, setOptionsAccordion } = useOptionsAccordion()

  return (
    <Item>
      <Header>
        <RadioInput
          text={header}
          isChecked={optionsAccordion.openItem === index}
          onChange={() => setOptionsAccordion(() => ({ openItem: index }))}
        />
      </Header>
      <Content $isActive={optionsAccordion.openItem === index}>
        {children}
      </Content>
    </Item>
  )
}

export default function OptionsAccordion({
  children,
}: {
  children: ReactNode
}) {
  return (
    <OptionsAccordionProvider>
      <Container>{children}</Container>
    </OptionsAccordionProvider>
  )
}
