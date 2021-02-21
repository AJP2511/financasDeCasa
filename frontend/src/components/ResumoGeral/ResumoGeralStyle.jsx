import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid black;
  font-size: 1.3rem;

  tr,
  td {
    border: 1px solid black;
    padding: 0.5rem;
  }

  th {
    padding: 0.5rem;
  }

  td {
    text-align: center;
  }
`;

export const CabecalhoTable = styled.tr`
  background-color: #009ddc;
`;

export const SpecialTh = styled.th`
  display: grid;
  grid-template-columns: 90% 10%;

  svg {
    margin: 0 auto;
    color: #fe9920;
    cursor: pointer;
  }
`;
