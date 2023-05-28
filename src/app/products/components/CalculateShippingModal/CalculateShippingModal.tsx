"use client"

import { FaTruckLoading } from "react-icons/fa"

import Modal from "@/components/Modal/Modal"
import {
  Result,
  ResultTitle,
  SpinnerBox,
  Title,
} from "./CalculateShippingModal.styles"
import Input from "@/components/Input"
import Button from "@/components/Button"
import rem from "@/utilities/styles/rem"
import { useState } from "react"
import { Spinner } from "@/components/PageSpinner/PageSpinner.styles"

interface CalculateShippingModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function CalculateShippingModal({
  isOpen,
  onClose,
}: CalculateShippingModalProps) {
  const [zipcode, setZipcode] = useState("")
  const [activeSection, setActiveSection] = useState(0)

  const renderForm = () => (
    <>
      <Title>Calcular prazo de entrega</Title>
      <Input
        value={zipcode}
        onChange={(event) => setZipcode(event.target.value)}
        placeholder="Digite o seu CEP"
        margin={`0 0 ${rem(10)} 0`}
        type="number"
      />
      <Button variant="primary" full>
        Calcular
      </Button>
    </>
  )

  const renderResult = () => (
    <Result>
      <FaTruckLoading />
      <ResultTitle>
        O produto será entregue entre os dias 07 e 10 de Junho
      </ResultTitle>
      <Button full>Ok</Button>
    </Result>
  )

  const renderSpinner = () => (
    <SpinnerBox>
      <Spinner />
    </SpinnerBox>
  )

  const renderedComponents = [renderForm(), renderSpinner(), renderResult()]

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {renderedComponents[activeSection]}
    </Modal>
  )
}
