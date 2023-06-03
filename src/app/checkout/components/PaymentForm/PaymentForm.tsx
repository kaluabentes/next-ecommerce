"use client"

import { Title } from "../utils"
import {
  Container,
  PaymentHeaderContainer,
  PaymentHeaderImage,
  PaymentHeaderTitle,
} from "./PaymentForm.styles"
import Input from "@/app/design-system/Input"
import Select from "@/app/design-system/Select"
import { FormGrid, InputsGrid } from "../ShippingForm/ShippingForm.styles"
import { Label } from "@/app/design-system/Input/Input.styles"
import useMercadoPago from "./hooks/useMercadoPago"
import CardFormInput from "./components/CardFormInput"
import CardForm from "./components/CardForm/CardForm"
import OptionsAccordion from "@/app/design-system/OptionsAccordion"
import { OptionsAccordionItem } from "@/app/design-system/OptionsAccordion/OptionsAccortion"

const PAYMENT_METHODS = [
  {
    title: "Cartão de Crédito",
    image: "/credit-cards.png",
    content: <CardForm />,
  },
  {
    title: "PIX",
    image: "/pix.webp",
    content: <div>Pix</div>,
  },
  {
    title: "Boleto",
    image: "/boleto.png",
    content: <div>Pix</div>,
  },
]

export default function PaymentForm() {
  useMercadoPago()

  return (
    <Container>
      <Title>Método de pagamento</Title>
      <OptionsAccordion>
        {PAYMENT_METHODS.map((paymentMethod, index) => (
          <OptionsAccordionItem
            index={index}
            header={
              <PaymentHeaderContainer>
                <PaymentHeaderTitle>{paymentMethod.title}</PaymentHeaderTitle>
                <PaymentHeaderImage
                  src={paymentMethod.image}
                  alt={paymentMethod.title}
                  $creditCard={paymentMethod.title === PAYMENT_METHODS[0].title}
                />
              </PaymentHeaderContainer>
            }
          >
            {paymentMethod.content}
          </OptionsAccordionItem>
        ))}
      </OptionsAccordion>
    </Container>
  )
}
