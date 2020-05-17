import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { spacing } from "@material-ui/system";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ProductModal from "./ProductModal";
import { CartActions } from "../store/CartActions";
import CartIcon from "./CartIcon";
import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { withStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";

// const StyledRating = withStyles({
//   iconFilled: {
//     color: "#ff6d75",
//   },
//   iconHover: {
//     color: "#ff3d47",
//   },
// })(Rating);

const useStyles = makeStyles((theme) => ({
  productCard: {
    // maxWidth: "500px",
    margin: "100px 0",
  },
  media: {
    height: 300,
    width: 300,
    paddingTop: "56.25%", // 16:9
  },
  text: {
    fontsize: 200,
    marginLeft: "auto",
  },
  cart: {
    padding: "0 30px",
  },
  title: {
    // marginLeft: "auto",
  },
  product: {
    padding: "0 120px 0 0",
  },
  // price: {
  //   marginLeft: 100,
  // },
  // rate: {
  //   display: "flex",
  //   flexDirection: "column",
  //   "& > * + *": {
  //     marginTop: theme.spacing(1),
  //   },
  // },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Card className={classes.productCard}>
      <CardMedia className={classes.media} image={props.image}></CardMedia>
      <CardContent>{props.children}</CardContent>
      <CardActions>
        <div className={classes.product}>
          <div className={classes.title}>{props.productName}</div>
          <div className={classes.text}>${props.price}</div>
        </div>
        <CartIcon className={classes.cart} id={props.id} price={props.price} />

        <ProductModal
          image={props.image}
          productName={props.productName}
          price={props.price}
          description={props.description}
        />
        <div className={classes.rate}>
          {/* <Box component="fieldset" mb={3} borderColor="transparent"> */}
          {/* <Rating
              name="customized-empty"
              defaultValue={2}
              precision={0.5}
              emptyIcon={<StarBorderIcon fontSize="inherit" />}
            /> */}

          {/* </Box> */}
        </div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
