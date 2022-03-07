import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import actionMiddleware from "../middlewares/apiActionMiddleware";
import rootReducer from "./../reducers/data";

const InitialState = {};

export const configureStore = () => {
  const store = createStore(
    rootReducer,
    InitialState,
    applyMiddleware(thunk, actionMiddleware)
  );

  return store;
};
