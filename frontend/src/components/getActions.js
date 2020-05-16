import { GET_NUMBERS_CART } from "../store/CartActions";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("getting from cart");
    dispatch({
      type: GET_NUMBERS_CART,
    });
  };
};
