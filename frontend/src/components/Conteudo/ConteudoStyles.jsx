import styled, { keyframes } from "styled-components";

const move = keyframes`
  from{
    opacity: 0;
    transform: translateX(-900px)
    
  }to{
    opacity: 1;
    transform: translateX(0px)
  }
`;

export const MainSection = styled.section`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    animation: ${move} 1s ease;

    &:hover {
      color: red;
    }
  }
`;
