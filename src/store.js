import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from 'redux-thunk';
import TripsReducer from "./reducers/TripCardsReducer"

const rootReducer = combineReducers({
  trips: TripsReducer
});

const logger_middleware = createLogger();

const store = createStore(rootReducer, compose(...[
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(logger_middleware)
].filter(v => v)))

export default store;