import { useEffect, useState } from "react"
import cep from "cep-promise"
import { CEP } from "cep-promise"

export default function useGetAddressByZipcode() {
  const [zipcode, setZipcode] = useState("")
  const [shippingInfo, setShippingInfo] = useState<CEP | undefined>()

  useEffect(() => {
    if (zipcode) {
      cep(zipcode.replace(/[^0-9]/g, "")).then((data: CEP) =>
        setShippingInfo(data)
      )
    }
  }, [zipcode])

  return { setZipcode, shippingInfo }
}
