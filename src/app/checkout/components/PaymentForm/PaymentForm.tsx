"use client"

import { Title } from "../utils"
import { Container } from "./PaymentForm.styles"
import Input from "@/app/design-system/Input"
import Select from "@/app/design-system/Select"
import { FormGrid, InputsGrid } from "../ShippingForm/ShippingForm.styles"
import { Label } from "@/app/design-system/Input/Input.styles"
import useMercadoPago from "./hooks/useMercadoPago"
import CardFormInput from "./components/CardFormInput"

export default function PaymentForm() {
  useMercadoPago()

  return (
    <Container>
      <Title>Método de pagamento</Title>
      <InputsGrid>
        <FormGrid>
          <CardFormInput
            id="form-checkout__cardNumber"
            label="Número do cartão"
            error="Este campo é obrigatório"
          />
          <CardFormInput
            id="form-checkout__expirationDate"
            label="Data de validade"
            error="Este campo é obrigatório"
          />
        </FormGrid>
        <FormGrid>
          <CardFormInput
            id="form-checkout__securityCode"
            label="Código de Segurança"
            error="Este campo é obrigatório"
          />
          <Input
            label="Títular do cartão"
            type="text"
            id="form-checkout__cardholderName"
          />
        </FormGrid>
        <FormGrid>
          <Select label="Banco emissor" id="form-checkout__issuer" disabled />
          <Select label="Parcelas" id="form-checkout__installments" />
        </FormGrid>
        <FormGrid>
          <Select
            label="Tipo de documento"
            id="form-checkout__identificationType"
          />
          <Input
            label="Número do documento"
            type="text"
            id="form-checkout__identificationNumber"
          />
        </FormGrid>
        <Input label="Email" type="email" id="form-checkout__cardholderEmail" />
      </InputsGrid>
    </Container>
  )
}
