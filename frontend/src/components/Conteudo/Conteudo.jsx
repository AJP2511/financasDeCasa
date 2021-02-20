import React from "react";
import { MainSection } from "./ConteudoStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

const Conteudo = () => {
  return (
    <MainSection>
      <FontAwesomeIcon icon={faDog} size="4x" />
      <h3>
        Selecione uma opção no menu lateral e comece a interagir com as finanças
        da casa!
      </h3>
    </MainSection>
  );
};

export default Conteudo;
