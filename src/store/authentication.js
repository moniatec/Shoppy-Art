import { apiBaseUrl } from "../config";

const TOKEN_KEY = "shoppyArt/authentication/token";
const SET_TOKEN = "shoppyArt/authentication/SET_TOKEN";
const REMOVE_TOKEN = "shoppyArt/authentication/REMOVE_TOKEN";
const ADDING_TO_CART = "shoppyArt/authentication/ADDING_TO_CART";

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

export const loginDemo = () => async (dispatch) => {
  try {
    const res = await fetch(`${apiBaseUrl}/users/token`, {
      method: "POST",
      body: JSON.stringify({
        email: "demoUser@demo.com",
        password: "Demo User",
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw res;
    }
    const { token } = await res.json();
    console.log(token);
    // Stores fullName, access_token, and user_id in localStorage:
    window.localStorage.setItem(TOKEN_KEY, token);

    dispatch(setToken(token));
  } catch (err) {
    console.log(err);
  }
};

export const logout = () => async (dispatch, getState) => {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(ADDING_TO_CART);
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
