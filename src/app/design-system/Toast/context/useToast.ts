import { useContext } from "react"

import { ToastActionContext, ToastStateParam } from "./ToastContextProvider"

export default function useToast() {
  const { setToast } = useContext(ToastActionContext)

  const useToast = (params: ToastStateParam) => {
    setToast((prev) => ({
      ...prev,
      ...params,
      isOpen: true,
    }))
  }

  return useToast
}
