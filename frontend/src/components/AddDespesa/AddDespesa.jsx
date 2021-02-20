/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getAllData } from "../../store/actions/Api.actions";
const AddDespesa = ({ data, getAllData }) => {
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {data.map((mes, index) => (
        <p key={index}>{mes.mes}</p>
      ))}
    </div>
  );
};

const MapStateToProps = (state) => {
  return {
    data: state.api.data,
  };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getAllData }, dispatch);

export default connect(MapStateToProps, mapDispatchToProps)(AddDespesa);
