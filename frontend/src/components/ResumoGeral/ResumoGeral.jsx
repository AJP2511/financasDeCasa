import React from "react";
import { Table, CabecalhoTable, SpecialTh } from "./ResumoGeralStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ModalAdd from "./ModalAdd/ModalAdd";
import { connect } from "react-redux";
import { modalAction } from "../../store/actions/Api.actions";
import { bindActionCreators } from "redux";

const ResumoGeral = ({ data, modalAction, modal }) => {
  const handleClick = () => {
    modalAction(!modal);
  };

  return (
    <>
      {modal && <ModalAdd id={data._id} mes={data.mes} />}
      <Table>
        <thead>
          <CabecalhoTable>
            <SpecialTh>
              Despesa
              <FontAwesomeIcon icon={faPlus} onClick={handleClick} />
            </SpecialTh>
            <th>Valor</th>
          </CabecalhoTable>
        </thead>
        <tbody>
          {data.despesas
            ? data.despesas.map((despesa, index) => (
                <tr key={index}>
                  <td>{despesa.nome}</td>
                  <td>R$ {despesa.valor}</td>
                </tr>
              ))
            : null}
        </tbody>
      </Table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.api.modal,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ modalAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResumoGeral);
