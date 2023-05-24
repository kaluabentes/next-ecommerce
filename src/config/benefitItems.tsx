import {
  RiCustomerService2Fill,
  RiRefund2Line,
  RiSecurePaymentLine,
  RiTruckLine,
} from "react-icons/ri"

export default [
  {
    title: "Compra Segura",
    description:
      "Utilizamos gateways de pagamentos reconhecidos no mercado que oferecem a máxima segurança na sua transação.",
    icon: <RiSecurePaymentLine />,
  },
  {
    title: "Frete Grátis",
    description:
      "O produto será entregue no prazo de 7 a 10 dias, acompanhe seu pedido com código de rastreio.",
    icon: <RiTruckLine />,
  },
  {
    title: "Suporte Profissional",
    description:
      "Se tiver alguma dúvida ou reclamação pode nos contatar direto pelos canais de comunicação email e whatsapp.",
    icon: <RiCustomerService2Fill />,
  },
  {
    title: "Satisfação ou Reembolso",
    description:
      "Caso aconteceça algo de errado, devolveremos o seu dinheiro sem problemas.",
    icon: <RiRefund2Line />,
  },
]
