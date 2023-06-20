"use client"

import Input from "@/app/design-system/Input"
import { Container, FormGrid, InputsGrid, Terms } from "./ShippingForm.styles"
import { Title } from "../utils"
import {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form"
import useGetAddressByZipcode from "../../hooks/useGetAddressByZipcode"
import { ChangeEvent, useEffect } from "react"
import { CheckoutFieldValues } from "../../CheckoutForm"
import useCheckoutContext from "../../contexts/checkout/useCheckoutContext"
import Link from "next/link"

interface ShippingFormProps {
  register: UseFormRegister<CheckoutFieldValues>
  errors: FieldErrors<CheckoutFieldValues>
  watch: UseFormWatch<CheckoutFieldValues>
  setValue: UseFormSetValue<CheckoutFieldValues>
}

export default function ShippingForm({
  register,
  errors,
  watch,
  setValue,
}: ShippingFormProps) {
  const { setCheckout } = useCheckoutContext()
  const { setZipcode, shippingInfo } = useGetAddressByZipcode()
  const zipcode = watch("zipcode")

  const setFieldInCheckout = (name: string, value: string) => {
    setCheckout((prev) => ({
      ...prev,
      shippingInfo: {
        ...prev.shippingInfo,
        [name]: value,
      },
    }))
  }

  useEffect(() => {
    if (zipcode) {
      setZipcode(zipcode)
    }
  }, [zipcode, shippingInfo])

  useEffect(() => {
    if (shippingInfo) {
      setValue("city", shippingInfo.city)
      setValue("state", shippingInfo.state)
      setValue("street", shippingInfo.street)
      setValue("neighborhood", shippingInfo.neighborhood)
    }
  }, [shippingInfo])

  return (
    <Container>
      <Title>Dados de entrega</Title>
      <InputsGrid>
        <FormGrid>
          <Input
            id="name"
            label="Nome completo"
            error={errors.name?.message as string}
            value={watch("name")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("name", event.currentTarget.value)
              setValue("name", event.currentTarget.value)
            }}
          />
          <Input
            id="email"
            label="Email"
            error={errors.email?.message as string}
            value={watch("email")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("email", event.currentTarget.value)
              setValue("email", event.currentTarget.value)
            }}
          />
        </FormGrid>
        <FormGrid>
          <Input
            id="phone"
            label="Número de telefone"
            error={errors.phone?.message as string}
            value={watch("phone")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("phone", event.currentTarget.value)
              setValue("phone", event.currentTarget.value)
            }}
          />
          <Input
            id="zipcode"
            label="CEP"
            error={errors.zipcode?.message as string}
            value={watch("zipcode")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("zipcode", event.currentTarget.value)
              setValue("zipcode", event.currentTarget.value)
            }}
          />
        </FormGrid>
        <FormGrid>
          <Input
            id="city"
            label="Cidade"
            value={watch("city")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("city", event.currentTarget.value)
              setValue("city", event.currentTarget.value)
            }}
          />
          <Input
            id="state"
            label="Estado"
            value={watch("state")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("state", event.currentTarget.value)
              setValue("state", event.currentTarget.value)
            }}
          />
        </FormGrid>
        <Input
          id="neighborhood"
          label="Bairro"
          value={watch("neighborhood")}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFieldInCheckout("neighborhood", event.currentTarget.value)
            setValue("neighborhood", event.currentTarget.value)
          }}
        />
        <FormGrid>
          <Input
            id="street"
            label="Rua"
            value={watch("street")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("street", event.currentTarget.value)
              setValue("street", event.currentTarget.value)
            }}
          />
          <Input
            id="number"
            label="Número"
            error={errors.number?.message as string}
            value={watch("number")}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFieldInCheckout("number", event.currentTarget.value)
              setValue("number", event.currentTarget.value)
            }}
          />
        </FormGrid>
        <Input
          id="complement"
          label="Complemento"
          value={watch("complement")}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setFieldInCheckout("complement", event.currentTarget.value)
            setValue("complement", event.currentTarget.value)
          }}
        />
        <Terms>
          Ao continuar você declara que está de acordo com os nossos{" "}
          <Link href="/terms-of-use">Termos de Uso</Link> e{" "}
          <Link href="/privacy-policy">Política de Privacidade</Link>
        </Terms>
      </InputsGrid>
    </Container>
  )
}
