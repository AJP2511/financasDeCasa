import React from "react";
import { Table, CabecalhoTable } from "./ResumoGeralStyle";

const ResumoGeral = ({ data }) => {
  return (
    <Table>
      <thead>
        <CabecalhoTable>
          <th>Despesa</th>
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
