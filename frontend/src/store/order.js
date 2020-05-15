import { api } from "../config";
const LOAD = "shoppyArt/authentication/LOAD";

export const load = (list) => ({ type: LOAD, list });

export const createOrder = (data) => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${api}/orders`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    dispatch(getOrder());
  }
};

export const getOrder = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${api}/orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list));
  }
};

export default function reducer(state = { types: [] }, action) {
  switch (action.type) {
    case LOAD: {
      return {
        ...state,
        list: action.list,
      };
    }

    default:
      return state;
  }
}
