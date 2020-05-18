import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ProductModal from "./ProductModal";
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
}));

const ProductCard = (props) => {
  const classes = useStyles();
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
        <div className={classes.rate}></div>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
