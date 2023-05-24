import mediaQuery from "@/utilities/styles/mediaQuery"
import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Container = styled.div`
  flex: 0 0 100%;
  min-width: 0;
  margin: 0 28px 0 28px;
  background: ${(props) => props.theme.colors.greenvogue};
  color: white;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.1);
  border-radius: ${rem(12)};
  display: flex;
  flex-direction: column;
  padding: ${rem(16)};

  ${mediaQuery(css`
    flex-direction: row;
    padding: ${rem(40)};
  `)}
`

export const ContentGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${rem(32)};
  max-width: 780px;

  ${mediaQuery(css`
    align-items: start;
  `)}
`

export const Title = styled.h2`
  margin: 0;
  line-height: 1.5em;
  text-align: center;
  font-size: ${rem(32)};
  margin-bottom: ${rem(16)};
  font-weight: 600;

  ${mediaQuery(css`
    text-align: left;
    font-size: ${rem(50)};
  `)}
`

export const Description = styled.p`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.5em;
  text-align: center;
  margin: 0;
  margin-bottom: ${rem(28)};

  ${mediaQuery(css`
    text-align: left;
    font-size: ${rem(18)};
  `)}
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Image = styled.img`
  height: ${rem(300)};
  width: 100%;
  object-fit: contain;
`
