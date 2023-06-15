"use client"

import { BiX } from "react-icons/bi"
import PageMessage from "../design-system/PageMessage"
import ContentContainer from "../design-system/ContentContainer"

export default function RestrictedAccess() {
  return (
    <ContentContainer>
      <PageMessage
        icon={<BiX />}
        title="Acesso restrito"
        description="Você não possui privilégios suficientes para acessar esta página"
        variant="error"
      />
    </ContentContainer>
  )
}
