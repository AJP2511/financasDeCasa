/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { NavLink } from "react-router-dom";
import { MainSection, LinksContainer } from "./SideBarStyles";

const SideBar = () => {
  return (
    <MainSection>
      <LinksContainer>
        <NavLink to="/">Principal</NavLink>
        <NavLink to="/add">Adicionar Mês</NavLink>
        <NavLink to="/addDespesa">Adicionar Despesa</NavLink>
      </LinksContainer>
    </MainSection>
  );
};

export default SideBar;
