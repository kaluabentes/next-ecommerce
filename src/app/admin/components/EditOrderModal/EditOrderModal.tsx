"use client"

import * as Yup from "yup"

import Modal from "@/app/design-system/Modal/Modal"
import { FormBox, Title } from "./EditOrderModal.styles"
import User from "@/models/User"
import Input from "@/app/design-system/Input"
import Button from "@/app/design-system/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import useToast from "@/app/design-system/Toast/context/useToast"
import { BiCheck } from "react-icons/bi"
import Order from "@/models/Order"
import { FIELD_REQUIRED_ERROR } from "@/config/errorMessages"
import Select from "@/app/design-system/Select"

interface EditOrderModalProps {
  isOpen: boolean
  onClose: () => void
  order: Order
}

interface EditOrderData {
  trackingCode: string
  paymentStatus: string
  paymentMethod: string
  status: string
  zipcode: string
  state: string
  city: string
  neighborhood: string
  street: string
  number: string
  complement: string
}

const editOrderSchema = Yup.object({
  paymentStatus: Yup.string().required(FIELD_REQUIRED_ERROR),
  paymentMethod: Yup.string().required(FIELD_REQUIRED_ERROR),
  status: Yup.string().required(FIELD_REQUIRED_ERROR),
  zipcode: Yup.string().required(FIELD_REQUIRED_ERROR),
  state: Yup.string().required(FIELD_REQUIRED_ERROR),
  city: Yup.string().required(FIELD_REQUIRED_ERROR),
  neighborhood: Yup.string().required(FIELD_REQUIRED_ERROR),
  street: Yup.string().required(FIELD_REQUIRED_ERROR),
  number: Yup.string().required(FIELD_REQUIRED_ERROR),
})

export default function EditOrderModal({
  isOpen,
  onClose,
  order,
}: EditOrderModalProps) {
  const toast = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<EditOrderData>({
    defaultValues: order,
    resolver: yupResolver(editOrderSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitCallback = async (data: EditOrderData) => {
    try {
      setIsLoading(true)

      const body = {
        id: order.id,
        trackingCode: data.trackingCode,
        paymentStatus: data.paymentStatus,
        paymentMethod: data.paymentMethod,
        status: data.status,
        zipcode: data.zipcode,
        state: data.state,
        city: data.city,
        neighborhood: data.neighborhood,
        street: data.street,
        number: data.number,
      }

      await fetch(`/admin/api/orders/update`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      toast({
        title: "Concluído",
        description: "Os dados do pedido foram salvos",
        icon: <BiCheck />,
      })

      location.reload()
    } catch (error: any) {
      console.log("Update error: ", error)
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  useEffect(() => {
    if (order) {
      reset(order)
    }
  }, [order])

  return (
    <Modal size="md" isOpen={isOpen} onClose={onClose}>
      <Title>Editar pedido</Title>
      <form onSubmit={handleSubmit(handleSubmitCallback)}>
        <FormBox>
          <Input
            label="Código de rastreio"
            {...register("trackingCode")}
            error={errors.trackingCode?.message}
          />
          <Input
            label="Estado de pagamento"
            {...register("paymentStatus")}
            error={errors.paymentStatus?.message}
            disabled
          />
          <Input
            label="Método de pagamento"
            {...register("paymentMethod")}
            error={errors.paymentMethod?.message}
            disabled
          />
          <Select
            label="Estado do pedido"
            {...register("status")}
            error={errors.status?.message}
          >
            <option value="">Selecione</option>
            <option value="delivery">Está a caminho</option>
            <option value="processing">Processando</option>
            <option value="waiting_payment">Aguardando pagamento</option>
          </Select>
          <Input
            label="CEP"
            {...register("zipcode")}
            error={errors.zipcode?.message}
          />
          <Input
            label="Estado"
            {...register("state")}
            error={errors.state?.message}
          />
          <Input
            label="Cidade"
            {...register("city")}
            error={errors.city?.message}
          />
          <Input
            label="Bairro"
            {...register("neighborhood")}
            error={errors.neighborhood?.message}
          />
          <Input
            label="Rua"
            {...register("street")}
            error={errors.street?.message}
          />
          <Input
            label="Número"
            {...register("number")}
            error={errors.number?.message}
          />
          <Input
            label="Complemento"
            {...register("complement")}
            error={errors.complement?.message}
          />
          <Button variant="primary" isLoading={isLoading}>
            Salvar
          </Button>
        </FormBox>
      </form>
    </Modal>
  )
}
