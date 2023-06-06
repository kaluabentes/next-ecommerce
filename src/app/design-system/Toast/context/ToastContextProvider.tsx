import { TiInfoLarge } from "react-icons/ti"
import { createContext, ReactNode, useEffect, useState } from "react"
import Toast from "../Toast"

export interface ToastState {
  isOpen: boolean
  title: string
  description: string | ReactNode
  icon?: ReactNode
}

export interface ToastStateParam {
  isOpen?: boolean
  title?: string
  description?: string | ReactNode
  icon?: ReactNode
}

export type Callback = (prevState: ToastState) => ToastState

const DEFAULT_ACTION_STATE = {
  setToast: (callback: Callback) => {},
}

const DEFAULT_VALUE_STATE = {
  isOpen: false,
  title: "",
  description: "",
  icon: <TiInfoLarge />,
}

const TIMEOUT_DURATION = 5000

export const ToastValueContext = createContext<ToastState>(DEFAULT_VALUE_STATE)
export const ToastActionContext = createContext(DEFAULT_ACTION_STATE)

let timeout: NodeJS.Timeout

export default function ToastContextProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, setState] = useState<ToastState>(DEFAULT_VALUE_STATE)

  useEffect(() => {
    const handleClose = () => {
      setState((prev) => ({ ...prev, isOpen: false }))
    }

    if (state.isOpen) {
      clearTimeout(timeout)
      setTimeout(handleClose, TIMEOUT_DURATION)
    }
  }, [state.isOpen])

  return (
    <ToastValueContext.Provider value={state}>
      <ToastActionContext.Provider value={{ setToast: setState }}>
        {children}
      </ToastActionContext.Provider>
      <Toast
        onClose={() => setState((prev) => ({ ...prev, isOpen: false }))}
        isOpen={state.isOpen}
        title={state.title}
        description={state.description}
        icon={state.icon}
      />
    </ToastValueContext.Provider>
  )
}
