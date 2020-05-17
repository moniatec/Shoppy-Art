import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SplashProduct from "./SplashProduct";
import { getProducts } from "../store/Product";
import { connect } from "react-redux";
const useStyles = makeStyles({
  root: {
    width: "100%",
    // maxWidth: 500,
  },
  container: {
    width: "100%",
    // maxWidth: 200,
    marginLeft: 200,
  },
  title1: {
    marginLeft: 250,
  },
  title2: {
    marginLeft: 450,
  },
  title3: {
    marginLeft: 200,
  },
});

const SplashContainer = (props) => {
  useEffect(() => {
    (async () => {
      props.getProducts();
    })();
  }, []);
  console.log(props);
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={10}
      direction="column"
      justify="center"
      alignItems="flex-start"
    >
      <Grid item spacing={3} justify="center">
        <div className={classes.root}>
          <Typography
            className={classes.title1}
            variant="h1"
            component="h2"
            gutterBottom
          >
            Welcome to Shoppy-Art
          </Typography>
          <Typography className={classes.title2} variant="h2" gutterBottom>
            Find things you'll love.
          </Typography>
          <Typography className={classes.title3} variant="h2" gutterBottom>
            Shop unique artistic items only on Shoppy-Art.
          </Typography>
        </div>
      </Grid>
      <Grid
        container
        spacing={10}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        {props.products.map((product) => (
          <Grid item spacing={3}>
            <SplashProduct
              key={product.id}
              product={product}
              title={product.id}
              id={product.id}
              productName={product.productName}
              image={product.photoUrl}
              price={product.price}
              description={product.description}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SplashContainer);
