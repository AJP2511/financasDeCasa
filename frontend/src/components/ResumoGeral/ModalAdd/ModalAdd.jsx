import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  MainContainer,
  InternalContainer,
  FormContainer,
  InputContainer,
} from "./ModalAddStyle";
import { addNewDespesa, modalAction } from "../../../store/actions/Api.actions";

const ModalAdd = ({ id, mes, addNewDespesa, modal, modalAction }) => {
  const [nome, setNome] = React.useState("");
  const [valor, setValor] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      nome,
      valor,
    };

    addNewDespesa(data, id);
    setNome("");
    setValor("");
    modalAction(!modal);
  };

  const handleOutside = (e) => {
    if (e.target === e.currentTarget) {
      modalAction(!modal);
    }
  };

  return (
    <MainContainer onClick={handleOutside}>
      <InternalContainer>
        <FormContainer onSubmit={handleSubmit}>
          <h3>Nova Despesa</h3>
          <h3>Referente ao mês de: {mes}</h3>
          <InputContainer>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              name="nome"
              id="nome"
              placeholder="Nome da despesa"
              value={nome}
              onChange={({ target }) => setNome(target.value)}
              required
            />
          </InputContainer>
          <InputContainer>
            <label htmlFor="valor">Valor</label>
            <input
              type="text"
              name="valor"
              id="valor"
              placeholder="Valor da despesa"
              value={valor}
              onChange={({ target }) => setValor(target.value)}
              required
            />
          </InputContainer>
          <button>Salvar Despesa</button>
        </FormContainer>
      </InternalContainer>
    </MainContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.api.modal,
  };
};

const mapDistachToProps = (dispatch) =>
  bindActionCreators({ addNewDespesa, modalAction }, dispatch);

export default connect(mapStateToProps, mapDistachToProps)(ModalAdd);
