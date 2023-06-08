import PageMessage from "@/app/design-system/PageMessage"
import { BiCheckCircle, BiCreditCard, BiDisc, BiSad } from "react-icons/bi"
import { TbTransferIn } from "react-icons/tb"
import { Container, ContentBox, Wrapper } from "./PaymentMessage.styles"
import { ReactNode, useEffect } from "react"
import ProductReceipt from "@/app/design-system/ProductReceipt"
import OrderProduct from "@/models/OrderProduct"

const ApprovedMessage = () => (
  <PageMessage
    icon={<BiCheckCircle />}
    title="Obrigado pelo seu pedido!"
    description="A confirmação do pedido foi enviada para kaluanbentes@gmail.com. Em breve enviaremos o código de rastreio via email e em Minha Conta. Lembrando que o prazo para o processamento do pedido é de 1 a 3 dias úteis."
    variant="success"
  />
)

const InProcessMessage = () => (
  <PageMessage
    icon={<TbTransferIn />}
    title="Aguardando confirmação"
    description="Assim que recebermos a confirmação do pagamento, daremos continuidade ao processamento do seu pedido e enviaremos uma atualização com o código de rastreio. Pagamentos via boleto podem levar até 2 dias para cair em conta."
  />
)

const RejectedMessage = () => (
  <PageMessage
    icon={<BiCreditCard />}
    title="Não foi possível efetuar o pagamento"
    description="Desculpe, mas o seu pagamento foi recusado. Houve um problema ao processar a transação. Por favor, verifique os detalhes do seu cartão de crédito/debito e tente novamente. Se o problema persistir, entre em contato com a sua instituição financeira para obter assistência adicional."
    variant="error"
  />
)

interface PaymentMessageProps {
  status?: "rejected" | "in_process" | "approved"
  transationDate?: string
  products?: OrderProduct[]
  total?: number
}

export default function PaymentMessage({
  status,
  transationDate,
  products,
  total,
}: PaymentMessageProps) {
  const renderShell = (children: ReactNode, receipt = false) => (
    <Wrapper>
      <Container>
        <ContentBox $receipt={receipt}>{children}</ContentBox>
        {receipt && (
          <ProductReceipt
            transactionDate={transationDate}
            products={products}
            total={total}
          />
        )}
      </Container>
    </Wrapper>
  )

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (status === "rejected") {
    return renderShell(<RejectedMessage />)
  }

  if (status === "in_process") {
    return renderShell(<InProcessMessage />, true)
  }

  return renderShell(<ApprovedMessage />, true)
}
