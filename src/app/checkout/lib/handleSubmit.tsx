import { CartProduct } from "@/contexts/cart/CartContextProvider"
import Product from "@/models/Product"
import { FormEvent } from "react"
import { FiAlertTriangle } from "react-icons/fi"

export default async function handleSubmit(
  event: FormEvent<HTMLFormElement>,
  shippingInfo: any,
  cardForm: any,
  toast: any,
  products: CartProduct[] = []
) {
  event.preventDefault()

  const {
    paymentMethodId: payment_method_id,
    issuerId: issuer_id,
    amount,
    token,
    installments,
    identificationNumber,
    identificationType,
  } = cardForm.getCardFormData()

  const paymentInfo = {
    token,
    issuer_id,
    payment_method_id,
    installments: Number(installments),
    payer: {
      identification: {
        type: identificationType,
        number: identificationNumber,
      },
    },
    additional_info: {
      items: products.map((product) => ({
        title: product.name,
        quantity: product.quantity,
        unit_price: product.price,
      })),
    },
  }

  const shippingKeys = Object.keys(shippingInfo).filter(
    (key) => key !== "complement"
  )

  if (shippingKeys.some((shippingKey) => !shippingInfo[shippingKey].length)) {
    toast({
      title: "Atenção",
      description: "Preencha todos os campos obrigatórios",
      icon: <FiAlertTriangle />,
    })
    return
  }
}
