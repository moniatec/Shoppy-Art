import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles((theme) => ({
  productCard: {
    // maxWidth: "500px",
    margin: "100px 0",
  },
  media: {
    height: 200,
    width: 200,
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

const SplashProduct = (props) => {
  const classes = useStyles();
  return (
    <Card spacing={10} className={classes.productCard}>
      <CardMedia className={classes.media} image={props.image}></CardMedia>
      <CardContent>{props.children}</CardContent>
      <CardActions disableSpacing>
        <div>
          <div className={classes.title}>{props.productName}</div>
          <div className={classes.text}>${props.price}</div>
        </div>
      </CardActions>
    </Card>
  );
};

export default SplashProduct;
