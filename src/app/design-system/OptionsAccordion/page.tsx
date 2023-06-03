import OptionsAccordion, { OptionsAccordionItem } from "./OptionsAccortion"

export default function OptionsAccordionPage() {
  return (
    <OptionsAccordion>
      <OptionsAccordionItem header={<b>Cartão de Crédito</b>} index={0}>
        Content
      </OptionsAccordionItem>

      <OptionsAccordionItem header={<b>PIX</b>} index={1}>
        Content
      </OptionsAccordionItem>

      <OptionsAccordionItem header={<b>Boleto</b>} index={2}>
        Content
      </OptionsAccordionItem>
    </OptionsAccordion>
  )
}
