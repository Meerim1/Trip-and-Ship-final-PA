import {START_TRIPS, SUCCESS_TRIPS, FAIL_TRIPS } from "../actions/TripCardsAction";

const TripsReducer = (state = {
  status: null, // ready / error / loading
  objects: [],
  last_error: null
}, action) => {
  switch(action.type){
    case START_TRIPS:
      return {
        ...state,
        status: "loading"
      }
    case SUCCESS_TRIPS:
      return {
        ...state,
        status: "ready",
        objects: action.payload
      }
    case FAIL_TRIPS:
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