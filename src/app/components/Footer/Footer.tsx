"use client"

import { BsWhatsapp, BsChatLeftFill, BsPinMapFill } from "react-icons/bs"

import ContentContainer from "@/components/ContentContainer"
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
import ContactMethod from "@/components/ContactMethod"
import rem from "@/utilities/styles/rem"
import menuItems from "@/config/menuItems"
import { RiCustomerService2Fill } from "react-icons/ri"

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
        <PaymentContainer>
          <PaymentTitle>Pagamento seguro com</PaymentTitle>
        </PaymentContainer>
        <PaymentContainer>
          <AppMax src="/appmax-dark.png" />
          <PaymentMethods src="/payment-methods.png" />
        </PaymentContainer>
        <PaymentContainer>
          <Copyright>&copy; Droptron | CNPJ: 0000-00000-0000-0001</Copyright>
        </PaymentContainer>
      </ContentContainer>
      <ChatButton>
        <RiCustomerService2Fill />
      </ChatButton>
    </Container>
  )
}
