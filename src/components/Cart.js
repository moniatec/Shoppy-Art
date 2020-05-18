import React from "react";
import MainNavBar from "./MainNavBar";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";
import InCart from "./InCart";
import ProductCard from "./ProductCard";

import CartSidePanel from "./CartSidePanel";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  total: {
    marginLeft: 650,
  },
  sale: {
    marginLeft: 40,
    marginTop: 150,
  },
  container: {
    marginTop: 50,
    marginLeft: 20,
  },

  shoppingCart: {
    marginTop: 80,
    marginLeft: 250,
    marginBottom: 40,
  },
}));

const Cart = (props) => {
  const classes = useStyles();

  const productsArray = [...Object.values(props.cartProps)];
  let productsForSale = [];
  for (let i = 0; i < productsArray.length; i++) {
    if (!productsArray[i].inCart) {
      productsForSale.push(productsArray[i]);
    }
  }

  let total = 0;
  const productsNumb = productsArray.filter((product) => product.inCart).length;
  productsArray
    .filter((product) => product.inCart)
    .map((product) => {
      total = total + product.price;
    });
  return (
    <>
      <CssBaseline />
      <Theme>
        {/* //   <h1>You have the following products on your cart</h1>
    //   {/* <div>{cartReducer}</div> */}
        <MainNavBar />
        <Grid
          container
          spacing={10}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Grid
            className={classes.container}
            container
            spacing={10}
            direction="column"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item spacing={3} justify="center">
              <Typography
                className={classes.shoppingCart}
                variant="h4"
                color="textPrimary"
              >
                You have {`${productsNumb}`} Products on your Shopping Cart
              </Typography>

              <Grid
                container
                spacing={10}
                direction="row"
                justify="center"
                alignItems="flex-start"
              >
                <Grid
                  item
                  // spacing={3}
                  container
                  spacing={10}
                  justify="center"
                  // direction="row"
                  // alignItems="flex-start"
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
                </Grid>
                <Grid
                  item
                  // spacing={3}
                  container
                  spacing={10}
                  justify="center"
                  direction="row"
                  alignItems="flex-start"
                >
                  <Grid item spacing={3}>
                    <Typography
                      className={classes.total}
                      variant="h5"
                      color="textSecondary"
                    >
                      Subtotal:{total}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    // spacing={3}
                    // container
                    // direction="row"
                    // alignItems="flex-start"
                    className={classes.panel}
                    id="panel"
                  >
                    <CartSidePanel />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid item spacing={3} justify="center" container>
              <Typography
                className={classes.sale}
                variant="h4"
                color="textPrimary"
              >
                You may also like
              </Typography>
            </Grid>
          </Grid>
          {productsForSale.map((product) => (
            <Grid item className={classes.column2} justify="center">
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
