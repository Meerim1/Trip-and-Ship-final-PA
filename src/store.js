import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import TripsReducer from "./reducers/TripCardsReducer";
import RequestsReducer from "./reducers/RequestCardsReducer";
import LoginReducer from "./reducers/LoginUserReducer";

const rootReducer = combineReducers({
  trips: TripsReducer,
  requests: RequestsReducer,
  user: LoginReducer
});

const logger_middleware = createLogger();

const store = createStore(rootReducer, compose(...[
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger_middleware)
].filter(v => v)))

export default store;