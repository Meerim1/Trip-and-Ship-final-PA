import axios from "axios";
import QS from "query-string";
import { GET_REQ_URL } from "../config/urls";

export const START_REQUESTS = "START_TRIPS";
export const SUCCESS_REQUESTS = "SUCCESS_TRIPS";
export const FAIL_REQUESTS = "FAIL_TRIPS";

const queryRequests = (query_params = {}) => {
  const query_string = QS.stringify(query_params);
  return axios
    .get(GET_REQ_URL)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error(error);
    });
};

export const startRequests = (q = "") => {
  return dispatch => {
    dispatch({
      type: START_REQUESTS
    });
    queryRequests({
      name: q
    })
      .then(requests => {
        dispatch(successRequests(requests));
      })
      .catch(error => {
        dispatch(failRequests(error));
      });
  };
};

export const successRequests = requests => {
  // ....
  return {
    type: SUCCESS_REQUESTS,
    payload: requests
  };
};

export const failRequests = error => {
  // ....
  return {
    type: FAIL_REQUESTS,
    payload: error
  };
};
