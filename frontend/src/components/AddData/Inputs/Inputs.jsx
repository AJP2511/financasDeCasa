import React from "react";
import { MainContainer } from "./InputsStyle";

const Inputs = ({ id, label, value, setValue, placeholder }) => {
  return (
    <MainContainer>
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => setValue(target.value)}
      />
    </MainContainer>
  );
};

export default Inputs;
