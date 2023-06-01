"use client"

import Input from "@/components/Input"
import { Container, FormGrid, InputsGrid } from "./ShippingForm.styles"
import { Title } from "../utils"

export default function ShippingSummary() {
  return (
    <Container>
      <Title>Dados de entrega</Title>
      <InputsGrid>
        <FormGrid>
          <Input id="name" label="Nome completo" />
          <Input id="email" label="Email" />
        </FormGrid>
        <FormGrid>
          <Input id="phone" label="Número de telefone" />
          <Input id="zipcode" label="CEP" />
        </FormGrid>
        <FormGrid>
          <Input id="city" label="Cidade" />
          <Input id="state" label="Estado" />
        </FormGrid>
        <Input id="neighborhood" label="Bairro" />
        <FormGrid>
          <Input id="street" label="Rua" />
          <Input id="number" label="Número" />
        </FormGrid>
        <Input id="complement" label="Complemento" />
      </InputsGrid>
    </Container>
  )
}
