import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  font-size: 1.3rem;

  tr,
  td,
  th {
    border: 1px solid black;
    padding: 0.5rem;
  }

  td {
    text-align: center;
  }
`;

export const CabecalhoTable = styled.tr`
  background-color: #009ddc;
`;
