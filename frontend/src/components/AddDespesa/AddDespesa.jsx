/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllData, getSingleData } from "../../store/actions/Api.actions";
import {
  MainContainer,
  MonthsContainer,
  OutputMonthContainer,
  ResumoContainer,
} from "./AddDespesaStyle";
import ResumoGeral from "../ResumoGeral/ResumoGeral";

const AddDespesa = ({ data, getAllData, getSingleData, singleData }) => {
  const [search, setSearch] = React.useState(false);

  useEffect(() => {
    getAllData();
  }, []);

  const handleClick = ({ target }) => {
    getSingleData(target.id);
    setSearch(true);
  };

  return (
    <MainContainer>
      <MonthsContainer>
        {data &&
          data.map((dado) => (
            <OutputMonthContainer
              key={dado._id}
              id={dado._id}
              onClick={handleClick}
            >
              <p id={dado._id}>{dado.mes}</p>
              <p id={dado._id}>{dado.ano}</p>
            </OutputMonthContainer>
          ))}
      </MonthsContainer>
      <ResumoContainer>
        {search && <ResumoGeral data={singleData} />}
      </ResumoContainer>
    </MainContainer>
  );
};

const MapStateToProps = (state) => {
  return {
    data: state.api.data,
    singleData: state.api.singleData,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getAllData, getSingleData }, dispatch);

export default connect(MapStateToProps, mapDispatchToProps)(AddDespesa);
