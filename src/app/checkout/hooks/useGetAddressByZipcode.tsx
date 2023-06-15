import { useEffect, useState } from "react"
import cep from "cep-promise"
import { CEP } from "cep-promise"
import { FiAlertTriangle } from "react-icons/fi"
import useToast from "@/app/design-system/Toast/context/useToast"

export default function useGetAddressByZipcode() {
  const toast = useToast()

  const [zipcode, setZipcode] = useState("")
  const [shippingInfo, setShippingInfo] = useState<CEP | undefined>()

  useEffect(() => {
    const findAddress = async () => {
      if (zipcode) {
        try {
          await cep(zipcode.replace(/[^0-9]/g, "")).then((data: CEP) =>
            setShippingInfo(data)
          )
        } catch (error: any) {
          toast({
            title: "Atenção",
            description: "Verifique se o CEP está correto",
            icon: <FiAlertTriangle />,
          })
        }
      }
    }

    findAddress()
  }, [zipcode])

  return { setZipcode, shippingInfo }
}
