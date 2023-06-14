import rem from "@/utilities/styles/rem"
import styled from "styled-components"

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  box-shadow: 0px 3px 3px 1px rgba(0, 0, 0, 0.05);
  background: white;
  border-radius: ${rem(8)};
`

export const Table = styled.table`
  min-width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  &:last-of-type {
    & td {
      border-bottom: 0;
    }
  }
`

export const TableHead = styled.th`
  text-align: left;
  padding: ${rem(10)} ${rem(16)};
  font-size: ${rem(12)};
  white-space: nowrap;
  font-weight: 700;
  text-transform: uppercase;
  border: 0;
  outline: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
`

export const TableData = styled.td`
  padding: ${rem(10)} ${rem(16)};
  font-weight: 500;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.1rem;
  font-size: ${rem(14)};
  vertical-align: middle;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  white-space: nowrap;
`

export const TableBody = styled.tbody``

export const TableHeader = styled.thead``
