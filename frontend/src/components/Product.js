// import React, { Component, useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getProduct } from "./store/Product";
// import { Grid } from "@material-ui/core";

// const Product = (props) => {
//   useEffect(() => {
//     (async () => {
//       props.getProduct();
//     })();
//   }, []);

//   return (
//     <Grid
//       container
//       spacing={10}
//       direction="row"
//       justify="center"
//       alignItems="flex-start"
//     >
//       <Grid item spacing={3} productName={product.productName}></Grid>
//       <Grid item spacing={3} image={product.photoUrl}></Grid>
//       <Grid item spacing={3} price={product.price}></Grid>
//       <Grid item spacing={3} description={product.description}></Grid>
//       ))}
//     </Grid>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     current: state.product.current,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     getProduct: (id) => dispatch(getProduct(id)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Product);
