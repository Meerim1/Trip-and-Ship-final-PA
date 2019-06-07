import axios from "axios";
import QS from "query-string";
import { request } from "https";

export const START_REQUESTS = "START_REQUESTS";
export const SUCCESS_REQUESTS = "SUCCESS_REQUESTS";
export const FAIL_REQUESTS = "FAIL_REQUESTS";

const queryRequests = (query_params = {}) => {
    const query_string = QS.stringify(query_params)
    return axios
    .get(`https://touristandtrip.herokuapp.com/orders/2${query_string}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.error("=((((");
    });
};

export const startRequests = (q = "") => {
  // ....
  return dispatch => {
    dispatch({
      type: START_REQUESTS
    })
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

// START_API_Q {status: loading}
// SUCCESS_API_Q { posts: [...], status: ready }
// FAIL_API_Q { status: error }
