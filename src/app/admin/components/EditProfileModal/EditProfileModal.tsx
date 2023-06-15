"use client"

import * as Yup from "yup"

import Modal from "@/app/design-system/Modal/Modal"
import { FormBox, Title } from "./EditProfileModal.styles"
import User from "@/models/User"
import Input from "@/app/design-system/Input"
import Button from "@/app/design-system/Button"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useState } from "react"
import useToast from "@/app/design-system/Toast/context/useToast"
import { FiAlertTriangle } from "react-icons/fi"
import { BiCheck } from "react-icons/bi"

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
  user: User
}

interface EditProfileData {
  name: string
  email: string
  phone: string
}

const editProfileSchema = Yup.object({
  email: Yup.string()
    .email("Email inválido")
    .required("Este campo é obrigatório"),
})

export default function EditProfileModal({
  isOpen,
  onClose,
  user,
}: EditProfileModalProps) {
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditProfileData>({
    defaultValues: user,
    resolver: yupResolver(editProfileSchema),
  })

  const [isLoading, setIsLoading] = useState(false)

  const handleSubmitCallback = async (data: EditProfileData) => {
    try {
      setIsLoading(true)

      const body = {
        name: data.name,
        phone: data.phone,
      }

      await fetch("/my-account/api/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })

      toast({
        title: "Concluído",
        description: "Seus dados foram salvos",
        icon: <BiCheck />,
      })
    } catch (error: any) {
      console.log("Update error: ", error)
    } finally {
      setIsLoading(false)
      onClose()
    }
  }

  return (
    <Modal size="sm" isOpen={isOpen} onClose={onClose}>
      <Title>Editar perfil</Title>
      <form onSubmit={handleSubmit(handleSubmitCallback)}>
        <FormBox>
          <Input
            label="Nome"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            {...register("email")}
            error={errors.email?.message}
            disabled
          />
          <Input
            label="Telefone"
            {...register("phone")}
            error={errors.phone?.message}
          />
          <Button variant="primary" isLoading={isLoading}>
            Salvar
          </Button>
        </FormBox>
      </form>
    </Modal>
  )
}
