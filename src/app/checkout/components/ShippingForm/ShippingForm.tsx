"use client"

import Input from "@/components/Input"
import { Container, InputsGrid, Title } from "./ShippingForm.styles"

export default function ShippingSummary() {
  return (
    <Container>
      <Title>Informações de entrega</Title>
      <InputsGrid>
        <Input id="name" label="Nome completo" />
        <Input id="email" label="Email" />
        <Input id="phone" label="Número de telefone" />
        <Input id="zipcode" label="CEP" />
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
