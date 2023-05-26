import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import { css, styled } from "styled-components"

export const Container = styled.div`
  padding: ${rem(16)};
  background-color: white;
  box-shadow: 0px 3px 3px 0.05px rgba(0, 0, 0, 0.05);
  border-radius: ${rem(8)};
  display: flex;
  flex-direction: column;
  gap: ${rem(16)};
  max-width: ${rem(758)};

  & img {
    width: 100%;
  }

  & h3,
  & h4,
  p,
  ul {
    margin: 0;
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

  & ul {
    list-style-image: url("/checkmark.svg");
    list-style-position: outside;
    padding: 0;
  }

  & li {
    line-height: 1.5em;
    margin-bottom: ${rem(14)};
    font-weight: 500;
    display: flex;
    align-items: center;
    position: relative;

    &::before {
      content: "";
      height: ${rem(30)};
      min-width: ${rem(30)};
      background-image: url("/checkmark.svg");
      margin-right: ${rem(10)};
    }
  }

  ${mediaQuery(css`
    padding: ${rem(32)};
  `)}
`
