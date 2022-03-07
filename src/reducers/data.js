import {
  GET_DATA_ACTION,
  GET_DATA_ACTION_SUCCESS,
  GET_DATA_ACTION_FAIL,
} from "./../actions";

const initialState = {};

const handleActions = (actionMapObject, initialState) => {
  return (state = initialState, action) => {
    if (actionMapObject[action.type]) {
      return actionMapObject[action.type](state, action);
    } else {
      return { ...state };
    }
  };
};

const reducer = handleActions(
  {
    [GET_DATA_ACTION]: (state, action) => {
      console.log("get action", action);
      return {
        ...state,
      };
    },
    [GET_DATA_ACTION_SUCCESS]: (state, action) => {
      console.log("get action success", action);
      return {
        ...state,
      };
    },
    [GET_DATA_ACTION_FAIL]: (state, action) => {
      console.log("get action FAILED", action);
      return {
        ...state,
      };
    },
  },
  initialState
);

export default reducer;
