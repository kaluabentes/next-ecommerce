import { loadMercadoPago } from "@mercadopago/sdk-js"
import { FormEvent, useEffect, useState } from "react"
import formConfig from "./formConfig"
import useCartContext from "@/contexts/cart/useCartContext"

declare global {
  var MercadoPago: any
}

export default function useMercadoPago() {
  const { totalProductsPrice } = useCartContext()
  const [cardFormInstance, setCardFormInstance] = useState<undefined | any>()

  useEffect(() => {
    const initializeMp = async () => {
      await loadMercadoPago()
      const mp = new window.MercadoPago(
        process.env.NEXT_PUBLIC_MERCADOPAGE_PUBLIC_TOKEN
      )
      const cardFormInstanceCreated = mp.cardForm({
        amount: totalProductsPrice.toFixed(2),
        iframe: true,
        form: formConfig,
        callbacks: {
          onFormMounted: (error: any) => {
            if (error) return console.warn("Form Mounted handling e: ", error)
            console.log("Form mounted")
          },
          onSubmit: (event: FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            console.log("getCardFormData: ", cardFormInstance.getCardFormData())
            console.log("createCardToken: ", cardFormInstance.createCardToken())
          },
        },
      })
      setCardFormInstance(cardFormInstanceCreated)
    }

    initializeMp()
  }, [])

  useEffect(() => {
    return () => {
      if (cardFormInstance) {
        cardFormInstance.unmount()
      }
    }
  }, [cardFormInstance])

  return { cardFormInstance }
}
