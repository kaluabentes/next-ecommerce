import { ReactNode, Ref } from "react"

import { Container } from "./ContentContainer.styles"

interface ContentContainerProps {
  children: ReactNode
  className?: string
  componentRef?: any
}

export default function ContentContainer({
  children,
  className,
  componentRef,
}: ContentContainerProps) {
  return (
    <Container ref={componentRef} className={className}>
      {children}
    </Container>
  )
}
