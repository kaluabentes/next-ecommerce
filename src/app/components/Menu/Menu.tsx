import { Fragment, useEffect, useState } from "react"
import {
  BiChevronDown,
  BiChevronUp,
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
  Overlay,
  Wrapper,
} from "./Menu.styles"
import ClickOutside from "@/components/ClickOutside/ClickOutside"

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
  onNavClick: (path: string) => void
}

export default function Menu({
  items,
  isOpen,
  onMenuToggle,
  onNavClick,
}: MenuProps) {
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
        <Fragment key={String(index + 1)}>
          <MenuItem
            onClick={() => openDropdown(index)}
            $isDropdownTrigger
            $isOpen={item.isOpen}
          >
            {item.label}
            {item.isOpen ? <BiChevronUp /> : <BiChevronDown />}
          </MenuItem>
          <DropdownMenu $isOpen={item.isOpen!}>
            {item.items.map((item, itemIndex) => (
              <MenuItem
                $isSub
                key={String(itemIndex + 1)}
                onClick={() => onNavClick(item.path!)}
              >
                {item.label}
              </MenuItem>
            ))}
          </DropdownMenu>
        </Fragment>
      )
    }

    return (
      <MenuItem key={String(index + 1)} onClick={() => onNavClick(item.path!)}>
        {item.label}
      </MenuItem>
    )
  }

  useEffect(() => {
    setStatefulItems(
      items.map((item) =>
        item.items ? { ...item, isOpen: false } : { ...item }
      )
    )
  }, [items])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"
    }

    if (!isOpen) {
      document.body.style.overflowY = "auto"
    }
  }, [isOpen])

  return (
    <>
      <Container $isOpen={isOpen}>
        <MenuContainer>{statefulItems.map(renderMenuItem)}</MenuContainer>
      </Container>
      <Overlay $isOpen={isOpen} onClick={onMenuToggle} />
    </>
  )
}
