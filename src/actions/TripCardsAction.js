import axios from "axios";
import QS from "query-string";

export const START_TRIPS = "START_TRIPS";
export const SUCCESS_TRIPS = "SUCCESS_TRIPS";
export const FAIL_TRIPS = "FAIL_TRIPS";

const queryTrips = (query_params = {}) => {
    const query_string = QS.stringify(query_params)
    return axios
    .get(`https://touristandtrip.herokuapp.com/trip/getAll`)
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error("=((((");
    });
};

export const startTrips = (q = "") => {
  // ....
  return dispatch => {
    dispatch({
      type: START_TRIPS
    })
    queryTrips({
      name: q
    })
      .then(trips => {
        dispatch(successTrips(trips));
      })
      .catch(error => {
        dispatch(failTrips(error));
      });
  };
};

export const successTrips = trips => {
  // ....
  return {
    type: SUCCESS_TRIPS,
    payload: trips
  };
};

export const failTrips = error => {
  // ....
  return {
    type: FAIL_TRIPS,
    payload: error
  };
};

// START_API_Q {status: loading}
// SUCCESS_API_Q { posts: [...], status: ready }
// FAIL_API_Q { status: error }
