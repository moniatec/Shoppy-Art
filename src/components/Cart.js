import React, { Fragment } from "react";
import MainNavBar from "./MainNavBar";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import { connect } from "react-redux";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addToCart } from "../store/CartActions";
import { Grid } from "@material-ui/core";
import InCart from "./InCart";

import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  total: {
    marginLeft: 680,
  },
  container: {
    marginTop: 100,
    marginLeft: 20,
  },
}));

const Cart = (props) => {
  // console.log(cartReducer);
  const classes = useStyles();
  console.log(props);
  const ADDING_TO_CART = "shoppyArt/authentication/ADDING_TO_CART";
  const productsStorage = window.localStorage.getItem(ADDING_TO_CART);
  const productsArray = [...Object.values(props.cartProps), ...productsStorage];
  // const productsArray = [...Object.values(props.cartProps), ...productsStorage];
  let total = 0;
  productsArray
    .filter((product) => product.inCart)
    .map((product) => {
      total = total + product.price;
    });
  console.log(productsArray);
  return (
    <>
      <CssBaseline />
      <Theme>
        {/* //   <h1>You have the following products on your cart</h1>
    //   {/* <div>{cartReducer}</div> */}
        <MainNavBar />
        <Grid
          className={classes.container}
          container
          spacing={10}
          direction="column"
          justify="center"
          alignItems="flex-start"
        >
          {productsArray
            .filter((product) => product.inCart)
            .map((product) => (
              <Grid item spacing={3}>
                {" "}
                <InCart //pass product
                  key={product.id}
                  product={product}
                  title={product.id}
                  id={product.id}
                  productName={product.productName}
                  image={product.image}
                  price={product.price}
                  description={product.description}
                />
              </Grid>
            ))}
          <Grid item spacing={3}>
            <Typography
              className={classes.total}
              component="h5"
              color="textSecondary"
            >
              Subtotal:{total}
            </Typography>
          </Grid>
        </Grid>
      </Theme>
    </>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartProps: state.cartReducer.products,
  };
};

export default connect(mapStateToProps)(Cart);
