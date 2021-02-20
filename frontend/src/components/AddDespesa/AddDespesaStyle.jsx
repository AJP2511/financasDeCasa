import styled from "styled-components";

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 200px auto;
  width: 100%;
`;

export const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const OutputMonthContainer = styled.div`
  display: flex;
  border: 2px solid #f52f57;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  justify-content: center;
  font-size: 1.125rem;

  &:hover {
    background-color: #fb1;
    color: #333;
    transition: all 0.3s ease;
  }
  p {
    cursor: pointer;
    margin: 0;
    padding: 1rem 0.5rem;
  }
`;
