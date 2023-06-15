"use client"

import { BsWhatsapp, BsChatLeftFill, BsPinMapFill } from "react-icons/bs"

import ContentContainer from "@/app/design-system/ContentContainer"
import {
  AppMax,
  ChatButton,
  Container,
  Copyright,
  FlexBox,
  Image,
  Item,
  Menu,
  MenuItem,
  PaymentContainer,
  PaymentMethods,
  PaymentTitle,
  Title,
} from "./Footer.styles"
import ContactMethod from "@/app/design-system/ContactMethod"
import rem from "@/utilities/styles/rem"
import menuItems from "@/config/menuItems"
import { RiCustomerService2Fill, RiWhatsappLine } from "react-icons/ri"
import footerMenuItems from "@/config/footerMenuItems"
import createKey from "@/utilities/array/createKey"
import { BiMailSend, BiMap, BiPhone } from "react-icons/bi"
import { useRouter } from "next/navigation"

export default function Footer() {
  const router = useRouter()

  return (
    <Container>
      <ContentContainer>
        <FlexBox>
          <Item>
            <Image src="/logo.svg" alt="Droptron" />
            <Title>Atendimento ao Cliente</Title>
            <ContactMethod
              icon={<BiMailSend />}
              text="kaluxshop01@gmail.com"
              margin={`0 0 ${rem(16)} 0`}
            />
            <ContactMethod
              icon={<RiWhatsappLine />}
              text="(92) 98146-7183"
              margin={`0 0 ${rem(16)} 0`}
            />
            <ContactMethod
              icon={<BiMap />}
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
            <Title>Menu Princial</Title>
            <Menu>
              {menuItems.map((menu, index) => (
                <MenuItem
                  onClick={() => router.push(menu.path!)}
                  key={createKey(index)}
                >
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Item>
          <Item>
            <Title>Institucional</Title>
            <Menu>
              {footerMenuItems.map((menu, index) => (
                <MenuItem
                  onClick={() => router.push(menu.path!)}
                  key={createKey(index)}
                >
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Item>
        </FlexBox>
        <PaymentContainer>
          <PaymentTitle>Pagamento seguro com</PaymentTitle>
        </PaymentContainer>
        <PaymentContainer>
          <AppMax src="/mercado-pago-logo.png" />
          <PaymentMethods src="/payment-methods-dark.png" />
        </PaymentContainer>
        <PaymentContainer>
          <Copyright>&copy; Kalux | CNPJ: 0000-00000-0000-0001</Copyright>
        </PaymentContainer>
      </ContentContainer>
      <ChatButton
        href="https://api.whatsapp.com/send?phone=92981467183&text=Ol%C3%A1,%20tudo%20bom?%20Gostaria%20de%20tirar%20algumas%20d%C3%BAvidas."
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiCustomerService2Fill />
      </ChatButton>
    </Container>
  )
}
