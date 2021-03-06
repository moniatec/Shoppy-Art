import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import ProductCard from "./ProductCard";
import { getProducts } from "../store/Product";
import { connect } from "react-redux";

const MainContainer = (props) => {
  useEffect(() => {
    (async () => {
      props.getProducts();
    })();
  }, []);

  return (
    <Grid
      container
      spacing={10}
      direction="row"
      justify="center"
      alignItems="flex-start"
    >
      {props.products.map((product) => (
        <Grid item>
          <ProductCard //pass product
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

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
