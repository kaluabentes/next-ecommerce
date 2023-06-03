import { createContext, ReactNode, useState } from "react"

export interface OptionsAccordionState {
  openItem: number | undefined
}

export interface OptionsAccordionStateParam {
  openItem?: number | undefined
}

export type Callback = (
  prevState: OptionsAccordionState
) => OptionsAccordionState

const DEFAULT_ACTION_STATE = {
  setOptionsAccordion: (callback: Callback) => {},
}

const DEFAULT_VALUE_STATE = {
  openItem: undefined,
}

export const OptionsAccordionValueContext =
  createContext<OptionsAccordionState>(DEFAULT_VALUE_STATE)
export const OptionsAccordionActionContext = createContext(DEFAULT_ACTION_STATE)

export default function OptionsAccordionProvider({
  children,
}: {
  children: ReactNode
}) {
  const [state, setState] = useState<OptionsAccordionState>(DEFAULT_VALUE_STATE)

  return (
    <OptionsAccordionValueContext.Provider value={state}>
      <OptionsAccordionActionContext.Provider
        value={{ setOptionsAccordion: setState }}
      >
        {children}
      </OptionsAccordionActionContext.Provider>
    </OptionsAccordionValueContext.Provider>
  )
}

import { useContext } from "react"

interface CartContextApi {
  optionsAccordion: any
  setOptionsAccordion: (callback: Callback) => void
}

export function useOptionsAccordion(): CartContextApi {
  const { setOptionsAccordion } = useContext(OptionsAccordionActionContext)
  const optionsAccordion = useContext(OptionsAccordionValueContext)

  return {
    setOptionsAccordion,
    optionsAccordion,
  }
}
