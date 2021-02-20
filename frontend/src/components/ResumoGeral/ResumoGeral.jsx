import React from "react";
import { Table, CabecalhoTable, SpecialTh } from "./ResumoGeralStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ResumoGeral = ({ data }) => {
  return (
    <Table>
      <thead>
        <CabecalhoTable>
          <SpecialTh>
            Despesa <FontAwesomeIcon icon={faPlus} />
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
  );
};

export default ResumoGeral;
