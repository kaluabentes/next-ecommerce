import { useEffect, useState } from "react"
import {
  BiCollection,
  BiMinus,
  BiPlus,
  BiStar,
  BiStoreAlt,
  BiX,
} from "react-icons/bi"

import {
  Container,
  CloseButton,
  MenuItem,
  MenuContainer,
  DropdownMenu,
} from "./Menu.styles"

interface Item {
  path?: string
  label: string
  items?: Item[]
}

interface StatefulItem extends Item {
  isOpen?: boolean
}

interface MenuProps {
  items: Item[]
  isOpen: boolean
  onMenuToggle: () => void
}

export default function Menu({ items, isOpen, onMenuToggle }: MenuProps) {
  const [statefulItems, setStatefulItems] = useState<StatefulItem[]>([])

  const openDropdown = (index: number) => {
    setStatefulItems((prev) =>
      prev.map((item, itemIndex) => {
        if (itemIndex === index) {
          return {
            ...item,
            isOpen: !item.isOpen,
          }
        }

        return item
      })
    )
  }

  const renderMenuItem = (item: StatefulItem, index: number) => {
    if (item.items) {
      return (
        <>
          <MenuItem
            onClick={() => openDropdown(index)}
            key={String(index + 1)}
            $isDropdownTrigger
            $isOpen={item.isOpen}
          >
            {item.label}
            {item.isOpen ? <BiMinus /> : <BiPlus />}
          </MenuItem>
          <DropdownMenu $isOpen={item.isOpen!}>
            {item.items.map((item, itemIndex) => (
              <MenuItem $isSub key={String(itemIndex + 1)}>
                {item.label}
              </MenuItem>
            ))}
          </DropdownMenu>
        </>
      )
    }

    return <MenuItem key={String(index + 1)}>{item.label}</MenuItem>
  }

  useEffect(() => {
    setStatefulItems(
      items.map((item) =>
        item.items ? { ...item, isOpen: false } : { ...item }
      )
    )
  }, [items])

  return (
    <Container $isOpen={isOpen}>
      <CloseButton onClick={onMenuToggle}>
        <BiX />
      </CloseButton>
      <MenuContainer>{statefulItems.map(renderMenuItem)}</MenuContainer>
    </Container>
  )
}
