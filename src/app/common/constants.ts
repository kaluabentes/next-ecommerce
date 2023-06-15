interface Key {
  [key: string]: string
}

export const statusText: Key = {
  processing: "Processando",
  waiting_payment: "Aguardando pagamento",
  delivery: "Está a caminho",
}

interface KeyVariant {
  [key: string]: "primary" | "blue" | "secondary"
}

export const statusVariant: KeyVariant = {
  processing: "blue",
  waiting_payment: "primary",
  delivery: "secondary",
}

export const paymentsStatusText: Key = {
  in_process: "Aguardando pagamento",
  rejected: "Pagamento rejeitado",
  approved: "Aprovado",
}

export const paymentStatusVariant: KeyVariant = {
  in_process: "blue",
  rejected: "primary",
  approved: "secondary",
}
