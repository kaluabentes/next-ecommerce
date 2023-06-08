import Input from "@/app/design-system/Input"
import Select from "@/app/design-system/Select"

import { FormGrid, InputsGrid } from "../../../ShippingForm/ShippingForm.styles"
import CardFormInput from "../CardFormInput"

export type PaymentFormErrors = {
  cardNumber?: string
  expirationMonth?: string
  securityCode?: string
  cardholderName?: string
  issuer?: string
  installments?: string
  identificationType?: string
  identificationNumber?: string
  cardholderEmail?: string
}

interface CardFormProps {
  errors?: PaymentFormErrors
}

export default function CardForm({ errors }: CardFormProps) {
  return (
    <InputsGrid>
      <FormGrid>
        <CardFormInput
          id="form-checkout__cardNumber"
          label="Número do cartão"
          error={errors?.cardNumber}
        />
        <CardFormInput
          id="form-checkout__expirationDate"
          label="Data de validade"
          error={errors?.expirationMonth}
        />
      </FormGrid>
      <FormGrid>
        <CardFormInput
          id="form-checkout__securityCode"
          label="Código de Segurança"
          error={errors?.securityCode}
        />
        <Input
          label="Títular do cartão"
          type="text"
          id="form-checkout__cardholderName"
          error={errors?.cardholderName}
        />
      </FormGrid>
      <FormGrid>
        <Select
          label="Banco emissor"
          id="form-checkout__issuer"
          disabled
          error={errors?.issuer}
        />
        <Select
          label="Parcelas"
          id="form-checkout__installments"
          error={errors?.installments}
        />
      </FormGrid>
      <FormGrid>
        <Select
          label="Tipo de documento"
          id="form-checkout__identificationType"
          error={errors?.identificationType}
        />
        <Input
          label="Número do documento"
          type="text"
          id="form-checkout__identificationNumber"
          error={errors?.identificationNumber}
        />
      </FormGrid>
    </InputsGrid>
  )
}
