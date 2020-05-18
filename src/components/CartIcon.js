import React, { useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../store/CartActions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

const CartIcon = (props) => {
  const [disableBtn, setDisableBtn] = useState(false);

  return (
    <IconButton
      id="icon"
      onClick={() => {
        props.addToCart(props.id, props.price);
        setDisableBtn(true);
      }}
      disabled={disableBtn}
    >
      <ShoppingCartIcon />
    </IconButton>
  );
};
export default connect(null, { addToCart })(CartIcon);
