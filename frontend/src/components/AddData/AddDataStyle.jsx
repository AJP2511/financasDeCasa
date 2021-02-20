import styled from "styled-components";

export const MainSection = styled.section`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const FormularioContainer = styled.form`
  div {
    margin-bottom: 1rem;
  }
`;

export const ButtonForm = styled.button`
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 2rem;
  border-radius: 10px;
  background-color: #0b3c49;
  color: #fbfbfb;
  display: block;
  margin: 0 auto;
  cursor: pointer;

  &:hover {
    background-color: #c2eabd;
    color: #333;
  }
`;
