import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import { css } from "styled-components"

export default css`
  & img {
    width: 100%;
    border-radius: ${rem(8)};
  }

  & h3,
  & h4,
  p,
  ul {
    margin: 0 0 ${rem(28)} 0;
  }

  & p {
    margin: 0 0 ${rem(28)} 0;
    line-height: 1.6em;
  }

  & h3,
  & h4 {
    line-height: 1.3em;
  }

  & h3 {
    font-size: ${rem(28)};
  }

  & ul,
  & ol {
    margin: 0 0 0 ${rem(0)};
    padding: 0 0 0 ${rem(28)};
    margin: 0 0 ${rem(28)} 0;
  }

  & li {
    line-height: 1.6em;
    margin: 0 0 ${rem(16)} 0;

    &:last-of-type {
      margin: 0;
    }
  }
`
