import {
  COLLECT_ALL_DATA,
  ADD_MONTH,
  COLLECT_SINGLE_DATA,
} from "./Action.types";
import axios from "axios";

const baseUrl = "http://localhost:3003/financas";

export const getAllData = () => {
  const request = axios.get(baseUrl);

  return {
    type: COLLECT_ALL_DATA,
    payload: request,
  };
};

export const addMonth = (data) => {
  const request = axios({
    method: "POST",
    data: data,
    url: baseUrl,
    headers: { "Content-type": "application/Json" },
  });

  return {
    type: ADD_MONTH,
    payload: request,
  };
};

export const getSingleData = (id) => {
  const request = axios({
    method: "GET",
    url: `${baseUrl}/${id}`,
  });

  return {
    type: COLLECT_SINGLE_DATA,
    payload: request,
  };
};
