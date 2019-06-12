import axios from "axios";
import { GET_LOGIN_URL, POST_LOGIN_URL } from "../config/urls";

export const START_LOGIN = "START_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAIL_LOGIN = "FAIL_LOGIN";

const loginRequests = (user = {}) => {
  console.log("login", user);

  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*"
  };
  return axios
    .post("http://localhost:3000/api/authorization", user, headers)
    .then(res => {

      return res.data;
    })
    .then(res => {
      user = {...user, auth_key:res}
      console.log(res)
      const headersConf = {
        "Content-Type": "application/json;charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
        "Authorization": res
      };
      return axios.get("http://localhost:3000/api/test", headersConf).then(res => {

        return {...user, isLogedIn: true};
      });
    })
    .catch(error => {
      console.log("headers", headers);
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
  console.log("payload",user)
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
