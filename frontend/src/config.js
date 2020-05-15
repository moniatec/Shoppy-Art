// export const apiBaseUrl = process.env.REACT_APP_API_BASE_URL;

export const api =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_DEV_API
    : process.env.REACT_APP_PROD_API;
