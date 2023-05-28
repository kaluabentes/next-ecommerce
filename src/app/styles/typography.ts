import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import { css } from "styled-components"

export default css`
  & img {
    width: 100%;
  }

  & h3,
  & h4,
  p,
  ul {
    margin: 0 0 ${rem(32)} 0;
  }

  & p {
    line-height: 1.6em;
    color: rgba(0, 0, 0, 0.61);
  }

  & h3,
  & h4 {
    line-height: 1.3em;
  }

  & h3 {
    font-size: ${rem(28)};

    ${mediaQuery(css`
      font-size: ${rem(32)};
    `)}
  }

  & h4 {
    font-size: ${rem(22)};

    ${mediaQuery(css`
      font-size: ${rem(28)};
    `)}
  }

  & ul,
  & ol {
    margin: 0 0 0 ${rem(0)};
    padding: 0 0 0 ${rem(32)};
    margin: 0 0 ${rem(32)} 0;
  }

  & li {
    line-height: 1.6em;
    margin: 0 0 ${rem(16)} 0;
  }
`
