import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { spacing } from "@material-ui/system";
import VisibilityIcon from "@material-ui/icons/Visibility";
import ProductModal from "./ProductModal";
import { CartActions } from "../store/CartActions";
import CartIcon from "./CartIcon";
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
    fontsize: 200,
    marginLeft: 350,
  },
  title: {
    // marginLeft: "auto",
  },
}));

const ProductCard = (props) => {
  const classes = useStyles();
  console.log(props);
  return (
    <Card spacing={10} className={classes.productCard}>
      <CardMedia className={classes.media} image={props.image}></CardMedia>
      <CardContent>{props.children}</CardContent>
      <CardActions disableSpacing>
        <div>
          <div className={classes.title}>{props.productName}</div>
          <div className={classes.text}>${props.price}</div>
        </div>
        <CartIcon id={props.id} price={props.price} />

        <ProductModal
          image={props.image}
          productName={props.productName}
          price={props.price}
          description={props.description}
        />
      </CardActions>
    </Card>
  );
};

export default ProductCard;
