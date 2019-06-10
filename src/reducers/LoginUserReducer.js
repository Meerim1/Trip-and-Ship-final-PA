import {
  START_LOGIN,
  SUCCESS_LOGIN,
  FAIL_LOGIN
} from "../actions/LoginUserAction";

const LoginReducer = (
  state = {
    status: null,
    object: [],
    last_error: null
  },
  action
) => {
  switch (action.type) {
    case START_LOGIN:
      return {
        ...state,
        status: "loading"
      };
    case SUCCESS_LOGIN:
      return {
        ...state,
        status: "ready",
        object: action.payload
      };
    case FAIL_LOGIN:
      return {
        ...state,
        status: "error",
        last_error: action.payload
      };
    default:
      return state;
  }
};

export default LoginReducer;
