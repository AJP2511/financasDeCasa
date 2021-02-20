import {
  COLLECT_ALL_DATA,
  ADD_MONTH,
  COLLECT_SINGLE_DATA,
} from "../actions/Action.types";

const initialState = {
  data: [],
  response: "",
  singleData: [],
};

const axiosReducer = (state = initialState, action) => {
  switch (action.type) {
    case COLLECT_SINGLE_DATA:
      return { ...state, singleData: action.payload.data };
    case ADD_MONTH:
      return { ...state, response: action.payload };
    case COLLECT_ALL_DATA:
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
};

export default axiosReducer;
