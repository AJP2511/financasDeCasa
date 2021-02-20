import React from "react";
import { Table } from "./ResumoGeralStyle";

const ResumoGeral = ({ data }) => {
  return (
    <Table>
      {data.despesas
        ? data.despesas.map((despesa, index) => (
            <div key={index}>
              <p>{despesa.nome}</p>
              <p>{despesa.valor}</p>
            </div>
          ))
        : null}
    </Table>
  );
};

export default ResumoGeral;
