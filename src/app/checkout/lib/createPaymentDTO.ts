export default function createPaymentDTO(data) {
  return {
    token: data.token,
    issuer_id: data.issuer_id,
    payment_method_id,
    transaction_amount: Number(amount),
    installments: Number(installments),
    description: "Descrição do produto",
    payer: {
      email,
      identification: {
        type: identificationType,
        number: identificationNumber,
      },
    },
  }
}
