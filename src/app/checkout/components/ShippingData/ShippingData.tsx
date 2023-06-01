"use client"

import Input from "@/components/Input"
import { Container, InputsGrid, Title } from "./ShippingData.styles"

export default function ShippingData() {
  return (
    <Container>
      <Title>Informações de entrega</Title>
      <InputsGrid>
        <Input
          id="name"
          label="Nome completo"
          placeholder="Digite seu nome completo"
        />
        <Input
          id="email"
          label="Email principal"
          placeholder="Digite seu email principal"
        />
        <Input
          id="phone"
          label="Número de telefone"
          placeholder="Digite seu WhatsApp"
        />
        <Input id="zipcode" label="CEP" placeholder="Digite seu CEP" />
        <Input id="city" label="Cidade" />
        <Input id="state" label="Estado" />
        <Input id="neighborhood" label="Bairro" />
        <Input id="street" label="Rua" />
        <Input id="number" label="Número" />
        <Input id="complement" label="Complemento" />
      </InputsGrid>
    </Container>
  )
}
