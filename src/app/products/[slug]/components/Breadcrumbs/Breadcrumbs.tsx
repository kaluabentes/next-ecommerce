"use client"

import { BiChevronRight } from "react-icons/bi"
import { Container, Item } from "./Breadcrumbs.styles"
import { useRouter } from "next/navigation"
import { useMediaQuery } from "react-responsive"
import { useTheme } from "styled-components"
import { Fragment } from "react"
import createKey from "@/utilities/array/createKey"

export interface BreadcrumbItem {
  path?: string
  title: string
  current?: boolean
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const router = useRouter()
  const theme = useTheme()
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${theme?.breakpoints.large})`,
  })

  if (!isLargeScreen) {
    return null
  }

  return (
    <Container>
      {items.map((item, index) => (
        <Fragment key={createKey(index)}>
          <Item
            $current={item.current}
            disabled={item.current}
            onClick={() => router.push(item.path!)}
          >
            {item.title}
          </Item>
          <BiChevronRight />
        </Fragment>
      ))}
    </Container>
  )
}
