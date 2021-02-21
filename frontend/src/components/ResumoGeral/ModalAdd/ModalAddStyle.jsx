import styled from "styled-components";

export const MainContainer = styled.div`
  z-index: 1000;
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
  color: #333;
`;

export const InternalContainer = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fb1;
  border-radius: 10px;
  h3 {
    margin: 5px;
  }

  button {
    border: none;
    outline: none;
    border-radius: 10px;
    padding: 1rem;
    font-size: 1.125rem;
    margin-top: 1rem;
    transition: all 0.3s ease;

    &:hover {
      background-color: #45425a;
      color: #fbfbfb;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputContainer = styled.div`
  margin: 0.5rem;

  label {
    font-weight: bold;
  }

  input {
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 1.2rem;
    margin-left: 10px;
    padding: 0.5rem;
  }
`;
