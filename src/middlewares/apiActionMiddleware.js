import axios from "axios";

const LOADING = "_LOADING";
const SUCCESS = "_SUCCESS";
const FAIL = "_FAIL";

const actionMiddleware = (store) => (next) => async (action) => {
  let response = next(action);
  if (action?.payload?.request?.url) {
    try {
      store.dispatch({ type: `${action.type}${LOADING}` });
      response = await axios.request(action.payload.request);
      store.dispatch({
        type: `${action.type}${SUCCESS}`,
        payload: response,
        prevAction: action,
      });
      return Promise.resolve({ isSuccess: true, response });
    } catch (error) {
      let errorResponse;
      if (error.response) {
        errorResponse = error.response;
      } else if (error.request) {
        errorResponse = error.request;
      } else {
        errorResponse = error.message;
      }
      store.dispatch({
        type: `${action.type}${FAIL}`,
        payload: errorResponse,
        prevAction: action,
      });
      return Promise.reject({ isSuccess: false, response: errorResponse });
    }
  } else {
    return response;
  }
};

export default actionMiddleware;
