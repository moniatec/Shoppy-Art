import { apiBaseUrl } from "../config";

const TOKEN_KEY = "shoppyArt/authentication/token";
const SET_TOKEN = "shoppyArt/authentication/SET_TOKEN";
const REMOVE_TOKEN = "shoppyArt/authentication/REMOVE_TOKEN";

export const removeToken = (token) => ({ type: REMOVE_TOKEN });
export const setToken = (token) => ({ type: SET_TOKEN, token });

export const loadToken = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN_KEY);
  if (token) {
    dispatch(setToken(token));
  }
};

export const register = (fullName, email, password) => async (dispatch) => {
  const res = await fetch(`${apiBaseUrl}/users`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fullName, email, password }),
  });

  if (res.ok) {
    const { token } = await res.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};

export const login = (email, password) => async (dispatch) => {
  const res = await fetch(`${apiBaseUrl}/users/token`, {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (res.ok) {
    const { token } = await res.json();
    window.localStorage.setItem(TOKEN_KEY, token);
    dispatch(setToken(token));
  }
};

export const logout = () => async (dispatch, getState) => {
  // const {
  //   authentication: { token },
  // } = getState();
  // const response = await fetch(`${apiBaseUrl}/users/token`, {
  //   method: "delete",
  //   headers: { Authorization: `Bearer ${token}` },
  // });

  window.localStorage.removeItem(TOKEN_KEY);
  dispatch(removeToken());
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }

    case REMOVE_TOKEN: {
      const newState = { ...state };
      delete newState.token;
      return newState;
    }

    default:
      return state;
  }
}
