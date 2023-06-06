"use client"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"
import { FiAlertTriangle } from "react-icons/fi"
import { SiMercadopago } from "react-icons/si"

import {
  FIELD_REQUIRED_ERROR,
  INVALID_EMAIL_ERROR,
  INVALID_INFO,
} from "@/config/errorMessages"
import { ContentGrid, Grid } from "./components/utils"
import ShippingForm from "./components/ShippingForm"
import PaymentForm from "./components/PaymentForm"
import ShippingSummary from "./components/ShippingSummary"
import useMercadoPago from "./hooks/useMercadoPago"
import { FormEvent, useEffect, useState } from "react"
import createCardForm from "./lib/createCardForm"
import useCartContext from "@/contexts/cart/useCartContext"
import useToast from "../design-system/Toast/context/useToast"
import { BiAlarmExclamation } from "react-icons/bi"

export interface CheckoutFieldValues {
  name: string
  email: string
  phone: string
  zipcode: string
  city: string
  state: string
  neighborhood: string
  street: string
  number: string
  complement: string
}

const checkoutFormSchema = Yup.object({
  name: Yup.string().required(FIELD_REQUIRED_ERROR),
  email: Yup.string().email(INVALID_EMAIL_ERROR).required(FIELD_REQUIRED_ERROR),
  phone: Yup.string().required(FIELD_REQUIRED_ERROR),
  zipcode: Yup.string().required(FIELD_REQUIRED_ERROR),
  number: Yup.string().required(FIELD_REQUIRED_ERROR),
})

const REQUIRED_SHIPPING_INFO = [
  "city",
  "email",
  "name",
  "neighborhood",
  "number",
  "phone",
  "state",
  "street",
  "zipcode",
]

export default function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false)
  const { totalProductsPrice, cart } = useCartContext()
  const { mp, setErrors, errors: mpErrors } = useMercadoPago()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(checkoutFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      zipcode: "",
      city: "",
      state: "",
      neighborhood: "",
      street: "",
      number: "",
      complement: "",
    },
  })

  const handleSubmitCallback: SubmitHandler<FieldValues> = (data) => {}

  useEffect(() => {
    let cardForm: any

    if (mp) {
      cardForm = createCardForm({
        mp,
        amount: totalProductsPrice,
        onError: (error: any) => {
          const fields = error.map((err: any) => err.message.split(" ")[0])

          setErrors(
            fields.reduce(
              (prev: any, curr: string) => ({
                ...prev,
                [curr]: INVALID_INFO,
              }),
              {}
            )
          )
        },
        onSubmit: async (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault()

          interface Key {
            [key: string]: string
          }

          const shippingInfo: Key = getValues()

          const shippingKeys = Object.keys(shippingInfo).filter(
            (key) => key !== "complement"
          )

          if (
            shippingKeys.some(
              (shippingKey) => !shippingInfo[shippingKey].length
            )
          ) {
            toast({
              title: "Atenção",
              description: "Preencha todos os campos obrigatórios",
              icon: <FiAlertTriangle />,
            })
            return
          }

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
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
              items: cart.products.map((product) => ({
                title: product.name,
                quantity: product.quantity,
                unit_price: product.price,
              })),
              payer: {
                phone: shippingInfo.phone,
                address: shippingInfo.street,
              },
              registration_date: new Date().toISOString(),
              shipments: {
                receiver_address: `${shippingInfo.street}, ${shippingInfo.number}`,
              },
            },
          }

          try {
            const response = await fetch("/checkout/api/payment")
          } catch (error: any) {
            console.log("fetch createpayment error", error)
          }

          console.log("getCardFormData: ", data)
          console.log("createCardToken: ", token)
          console.log("shippingInfo: ", shippingInfo)
        },
      })
    }

    return () => {
      if (cardForm) {
        cardForm.unmount()
      }
    }
  }, [mp])

  useEffect(() => {
    toast({
      title: "Ambiente Seguro",
      description: (
        <>
          Você está em um ambiente seguro integrado ao{" "}
          <strong style={{ color: "white" }}>Mercado Pago</strong>
        </>
      ),
      icon: <SiMercadopago />,
    })
  }, [])

  return (
    <Grid id="form-checkout" onSubmit={handleSubmit(handleSubmitCallback)}>
      <ContentGrid>
        <ShippingForm
          register={register}
          errors={errors}
          watch={watch}
          setValue={setValue}
        />
        <PaymentForm errors={mpErrors} />
      </ContentGrid>
      <ShippingSummary isLoading={isLoading} />
    </Grid>
  )
}
