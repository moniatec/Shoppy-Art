import { apiBaseUrl } from "../config";

const LOAD = "shoppyArt/authentication/LOAD";
const SET_CURRENT = "shoppyArt/authentication/SET_CURRENT";

export const load = (list) => ({ type: LOAD, list });
export const setCurrent = (current) => ({ type: SET_CURRENT, current });

export const getProduct = (id) => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${apiBaseUrl}/product/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const current = await response.json();
    dispatch(setCurrent(current));
  }
};

export const getProducts = () => async (dispatch, getState) => {
  const {
    authentication: { token },
  } = getState();
  const response = await fetch(`${apiBaseUrl}/products`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.ok) {
    const list = await response.json();
    dispatch(load(list.products));
  }
};

export default function reducer(state = { list: [] }, action) {
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
