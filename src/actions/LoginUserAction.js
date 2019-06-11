import axios from "axios";
import { LOGIN_URL } from "../config/urls";

export const START_LOGIN = "START_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAIL_LOGIN = "FAIL_LOGIN";

const loginRequests = (user = {}) => {
  console.log("login", user);

  const headers = {
    "Authorization": "Basic bW1AZ21haWwuY29tOjEyMw==",
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  };
  return axios.post(LOGIN_URL, user, headers).then(res => {
    console.log(res);
    console.log(res.data);
    return res.data;
  });
};

export const startLogin = user => {
  return dispatch => {
    dispatch({
      type: START_LOGIN
    });
    return loginRequests(user)
      .then(user => {
        dispatch(successLogin(user));
        return true;
      })
      .catch(error => {
        console.log(error);
        dispatch(failLogin(error));
        return false;
      });
  };
};

export const successLogin = user => {
  return {
    type: SUCCESS_LOGIN,
    payload: user
  };
};

export const failLogin = error => {
  return {
    type: FAIL_LOGIN,
    payload: error
  };
};
