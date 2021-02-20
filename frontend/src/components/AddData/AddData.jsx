import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addMonth } from "../../store/actions/Api.actions";
import { MainSection, FormularioContainer, ButtonForm } from "./AddDataStyle";
import Inputs from "./Inputs/Inputs";

const AddData = ({ addMonth, response }) => {
  if (response) console.log(response);
  const [mes, setMes] = useState("");
  const [ano, setAno] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      mes,
      ano,
      despesas: [],
    };

    addMonth(body);
    setMes("");
    setAno("");
  };

  return (
    <MainSection>
      <FormularioContainer onSubmit={handleSubmit}>
        <Inputs
          id="mes"
          label="Mês"
          value={mes}
          setValue={setMes}
          placeholder="Digite o mês da entrada"
        />
        <Inputs
          id="ano"
          label="Ano"
          value={ano}
          setValue={setAno}
          placeholder="Digite o ano da entrada"
        />
        <ButtonForm>Inserir</ButtonForm>
      </FormularioContainer>
    </MainSection>
  );
};

const mapStateToProps = (state) => {
  return {
    response: state.api.response,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ addMonth }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddData);
