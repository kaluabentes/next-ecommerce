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
  title: String
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
  removeBottomPadding?: boolean
}

export default function Breadcrumbs({
  items,
  removeBottomPadding,
}: BreadcrumbsProps) {
  const router = useRouter()
  const theme = useTheme()
  const isLargeScreen = useMediaQuery({
    query: `(min-width: ${theme?.breakpoints.large})`,
  })

  if (!isLargeScreen) {
    return null
  }

  return (
    <Container $removeBottomPadding={removeBottomPadding}>
      {items.map((item, index) => (
        <Fragment key={createKey(index)}>
          <Item
            $current={!item.path}
            disabled={!item.path}
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
