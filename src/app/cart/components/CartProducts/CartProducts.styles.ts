"use client"

import rem from "@/utilities/styles/rem"
import styled, { css } from "styled-components"

export const Box = styled.div`
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  background-color: white;
  border-radius: ${rem(12)};
  overflow: hidden;
  flex: 1;
  width: 100%;
`
