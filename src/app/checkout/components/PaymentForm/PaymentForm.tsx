"use client"

import { Title } from "../utils"
import {
  Container,
  PaymentHeaderContainer,
  PaymentHeaderImage,
  PaymentHeaderTitle,
} from "./PaymentForm.styles"
import CardForm, { PaymentFormErrors } from "./components/CardForm/CardForm"
import OptionsAccordion from "@/app/design-system/OptionsAccordion"
import { OptionsAccordionItem } from "@/app/design-system/OptionsAccordion/OptionsAccortion"
import createKey from "@/utilities/array/createKey"

interface PaymentFormProps {
  errors?: PaymentFormErrors
}

export default function PaymentForm({ errors }: PaymentFormProps) {
  const paymentMethods = [
    {
      title: "Cartão de Crédito",
      image: "/credit-cards.png",
      content: <CardForm errors={errors} />,
    },
    // {
    //   title: "PIX",
    //   image: "/pix.webp",
    //   content: <div>Pix</div>,
    // },
    // {
    //   title: "Boleto",
    //   image: "/boleto.png",
    //   content: <div>Pix</div>,
    // },
  ]

  return (
    <Container>
      <Title>Método de pagamento</Title>
      <OptionsAccordion>
        {paymentMethods.map((paymentMethod, index) => (
          <OptionsAccordionItem
            key={createKey(index)}
            index={index}
            header={
              <PaymentHeaderContainer>
                <PaymentHeaderTitle>{paymentMethod.title}</PaymentHeaderTitle>
                <PaymentHeaderImage
                  src={paymentMethod.image}
                  alt={paymentMethod.title}
                  $creditCard={paymentMethod.title === paymentMethods[0].title}
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
