import DataService from "../services/data";

export const GET_DATA_ACTION = "GET_DATA";
export const GET_DATA_ACTION_SUCCESS = `${GET_DATA_ACTION}_SUCCESS`;
export const GET_DATA_ACTION_FAIL = `${GET_DATA_ACTION}_FAIL`;

export function getAllData() {
  return {
    type: GET_DATA_ACTION,
    payload: {
      request: DataService.getAllData(),
    },
  };
}
