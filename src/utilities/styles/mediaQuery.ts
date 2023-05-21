import { RuleSet, css } from "styled-components"

export default function mediaQuery(cssString: RuleSet<object>) {
  return css`
    @media (min-width: ${(props) => props.theme.breakpoints.large}) {
      ${cssString}
    }
  `
}
