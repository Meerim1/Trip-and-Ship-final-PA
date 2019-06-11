import {START_REQUESTS, SUCCESS_REQUESTS, FAIL_REQUESTS } from "../actions/RequestCardsAction";

const TripsReducer = (state = {
  status: null, // ready / error / loading
  objects: [],
  last_error: null
}, action) => {
  switch(action.type){
    case START_REQUESTS:
      return {
        ...state,
        status: "loading"
      }
    case SUCCESS_REQUESTS:
      return {
        ...state,
        status: "ready",
        objects: action.payload
      }
    case FAIL_REQUESTS:
      return {
        ...state,
        status: "error",
        last_error: action.payload
      }
    default:
      return state
  }
}

export default TripsReducer;