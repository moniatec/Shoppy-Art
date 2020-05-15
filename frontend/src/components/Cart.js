import React, { Fragment } from "react";
import MainNavBar from "./MainNavBar";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import { connect } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { addToCart } from "../store/CartActions";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
const Cart = (props) => {
  // console.log(cartReducer);
  console.log(props);
  const productsArray = Object.values(props.cartProps);
  console.log(productsArray);
  return (
    // <>
    //   <h1>You have the following products on your cart</h1>
    //   {/* <div>{cartReducer}</div> */}
    // </>
    <Grid
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
            <ProductCard //pass product
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
    </Grid>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    cartProps: state.cartReducer.products,
  };
};

export default connect(mapStateToProps)(Cart);
