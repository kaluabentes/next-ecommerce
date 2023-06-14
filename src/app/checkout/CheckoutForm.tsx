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
import { CartProduct } from "@/contexts/cart/CartContextProvider"
import PaymentMessage from "./components/PaymentMessage"
import { Title } from "@/app/[slug]/components/PageContent/PageContent.styles"
import Order from "@/models/Order"
import { PaymentStatus } from "./components/PaymentMessage/PaymentMessage"

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

const generateDescription = (products: CartProduct[]) =>
  products.reduce(
    (prev: string, curr: CartProduct) =>
      `${prev}, ${curr.quantity}x ${curr.name}`,
    ""
  )

export default function CheckoutForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [paymentStatus, setPaymentStatus] = useState()
  const [order, setOrder] = useState<Order | undefined>()
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
          const fields = error
            .map((err: any) => err.message.split(" ")[0])
            .map((field: string) =>
              field === "parameter" ? "cardholderName" : field
            )

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
            (key) => !["complement"].includes(key)
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
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData()

          if (!installments) {
            setErrors({ installments: FIELD_REQUIRED_ERROR })
            return
          }

          setIsLoading(true)

          const paymentInfo = {
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: generateDescription(cart.products),
            payer: {
              email: shippingInfo.email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          }

          const orderInfo = {
            paymentMethod: "Cartão de crédito",
            status: "delivery",
            products: cart.products,
          }

          const body = {
            paymentInfo,
            shippingInfo,
            orderInfo,
          }

          try {
            const response = await fetch("/checkout/api/payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body),
            })
            const data = await response.json()

            setPaymentStatus(data.paymentStatus)

            if (data.order) {
              setOrder({
                ...data.order,
                user: data.user,
              })
            }

            if (
              data.error &&
              data.error === "Invalid user identification number"
            ) {
              toast({
                title: "Atenção",
                description: "O número do documento é inválido",
                icon: <FiAlertTriangle />,
              })
            }
          } catch (error: any) {
            console.log("fetch createpayment error", error)
          } finally {
            setIsLoading(false)
          }
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
      title: "Mercado Pago",
      description: "Ambiente seguro ativo",
      icon: <SiMercadopago />,
    })
  }, [])

  if (paymentStatus) {
    return (
      <PaymentMessage
        email={order?.user?.email!}
        status={paymentStatus}
        transationDate={order?.createdAt}
        products={order?.products}
        total={order?.products?.reduce(
          (prev, curr) => prev + curr?.quantity! * curr?.price!,
          0
        )}
      />
    )
  }

  return (
    <>
      <Title>Finalize sua compra</Title>
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
    </>
  )
}
