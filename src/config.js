const production = process.env.NODE_ENV === "production";
export const apiBaseUrl = production
  ? "https://shoppy-art-backend.herokuapp.com"
  : process.env.REACT_APP_API_BASE_URL;
