import React from "react";
import { MainContainer, BodyContainer } from "./AppStyle";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Conteudo from "./components/Conteudo/Conteudo";
import Footer from "./components/Footer/Footer";
import { Switch, Route } from "react-router-dom";
import AddData from "./components/AddData/AddData";
import ResumoGeral from "./components/ResumoGeral/ResumoGeral";
import AddDespesa from "./components/AddDespesa/AddDespesa";

const App = () => {
  return (
    <MainContainer>
      <Header />
      <BodyContainer>
        <SideBar />
        <Switch>
          <Route path="/" exact children={<Conteudo />} />
          <Route path="/add" children={<AddData />} />
          <Route path="/addDespesa" children={<AddDespesa />} />
          <Route path="/resumo" children={<ResumoGeral />} />
        </Switch>
      </BodyContainer>
      <Footer />
    </MainContainer>
  );
};

export default App;
