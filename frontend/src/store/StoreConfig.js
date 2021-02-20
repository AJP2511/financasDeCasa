import { combineReducers, createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import axiosReducer from "./reducers/Api.reducers";

const reducers = combineReducers({
  api: axiosReducer,
});

const storeConfig = () => {
  return applyMiddleware(promise)(createStore)(reducers);
};

export default storeConfig;
