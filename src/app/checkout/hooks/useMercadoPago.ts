import { loadMercadoPago } from "@mercadopago/sdk-js"
import { FormEvent, useEffect, useState } from "react"
import formConfig from "./formConfig"
import useCartContext from "@/contexts/cart/useCartContext"
import { INVALID_INFO } from "@/config/errorMessages"
import { PaymentFormErrors } from "../components/PaymentForm/components/CardForm/CardForm"

declare global {
  var MercadoPago: any
}

export default function useMercadoPago() {
  const [mp, setMp] = useState<any | undefined>()
  const [errors, setErrors] = useState<undefined | PaymentFormErrors>()

  useEffect(() => {
    const initializeMp = async () => {
      await loadMercadoPago()
      const mp = new window.MercadoPago(
        process.env.NEXT_PUBLIC_MERCADOPAGE_PUBLIC_TOKEN
      )
      setMp(mp)
    }

    initializeMp()
  }, [])

  return { mp, errors, setErrors }
}
