import React, { Component, useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../store/CartActions";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import IconButton from "@material-ui/core/IconButton";

import "./MainPage.css";

const CartIcon = (props) => {
  const ADDING_TO_CART = "shoppyArt/authentication/ADDING_TO_CART";
  const [cartProducts, setCartProducts] = useState(0);
  const [disableBtn, setDisableBtn] = useState(false);
  console.log(props);

  // const handleClick = () => {
  //   console.log(cartProducts);
  //   setCartProducts(cartProducts + 1);
  // };
  return (
    <IconButton
      id="icon"
      onClick={() => {
        props.addToCart(props.id, props.price);
        setDisableBtn(true);
        console.log(props);
        // window.localStorage.setItem(ADDING_TO_CART, props.id);
      }}
      disabled={disableBtn}
    >
      <ShoppingCartIcon />
    </IconButton>
  );
};
export default connect(null, { addToCart })(CartIcon);
