"use client"

import { BsWhatsapp, BsChatLeftFill, BsPinMapFill } from "react-icons/bs"

import ContentContainer from "@/components/ContentContainer"
import {
  Container,
  FlexBox,
  Image,
  Item,
  Menu,
  MenuItem,
  Title,
} from "./Footer.styles"
import ContactMethod from "@/components/ContactMethod"
import rem from "@/utilities/styles/rem"
import menuItems from "@/config/menuItems"

export default function Footer() {
  return (
    <Container>
      <ContentContainer>
        <FlexBox>
          <Item>
            <Image src="logo.svg" alt="Droptron" />
            <Title>Atendimento ao Cliente</Title>
            <ContactMethod
              icon={<BsChatLeftFill />}
              text="kaluxshop01@gmail.com"
              margin={`0 0 ${rem(16)} 0`}
            />
            <ContactMethod
              icon={<BsWhatsapp />}
              text="(92) 98146-7183"
              margin={`0 0 ${rem(16)} 0`}
            />
            <ContactMethod
              icon={<BsPinMapFill />}
              text={
                <>
                  Rua Abel Botelho, 273, Flores, Manaus / AM
                  <br />
                  CEP 69058-195
                </>
              }
            />
          </Item>
          <Item>
            <Title>Menu de Rodapé</Title>
            <Menu>
              {menuItems.map((menu) => (
                <MenuItem>{menu.label}</MenuItem>
              ))}
            </Menu>
          </Item>
          <Item>
            <Title>Menu Principal</Title>
            <Menu>
              {menuItems.map((menu) => (
                <MenuItem>{menu.label}</MenuItem>
              ))}
            </Menu>
          </Item>
        </FlexBox>
      </ContentContainer>
    </Container>
  )
}
