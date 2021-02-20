import { COLLECT_ALL_DATA, ADD_MONTH } from "../actions/Action.types";

const initialState = {
  data: [],
  response: "",
};

const axiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MONTH:
      return { ...state, response: action.payload };
    case COLLECT_ALL_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default axiosReducer;
