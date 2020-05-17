import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Container";
import LoginDemo from "./LoginDemo";
const { withStyles } = require("@material-ui/core/styles");

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 200,
  },
  contact: {
    flexGrow: 1,
    marginLeft: 100,
  },
  navbar: {
    background: theme.backgroundColor,
    flexGrow: 1,
    width: "100%",
  },
}));

const styles = {
  image: {
    height: 400,
    width: 800,
  },
};

export default function Splash() {
  const classes = useStyles();
  const StyledSlide = withStyles(styles);

  return (
    <React.Fragment>
      {/* <div className={classes.root}> */}
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <h2 className={classes.shoppy}>Shoppy-Art</h2>
          <div className={classes.title}>
            <Link
              className={classes.about}
              color="inherit"
              href="https://github.com/moniatec/Shoppy-Art/pull/6"
            >
              About
            </Link>
            <Link
              className={classes.contact}
              color="inherit"
              href="https://github.com/moniatec/Shoppy-Art/pull/6"
            >
              Contact
            </Link>
          </div>
          <Button color="inherit" href="/signup">
            Sign Up
          </Button>
          <Button color="inherit" href="/login">
            Log In
          </Button>
          <LoginDemo>Demo</LoginDemo>
          {/* <Button color="inherit" href="/home">
            <LoginDemo>Demo</LoginDemo>
          </Button> */}
        </Toolbar>
      </AppBar>
      {/* </div> */}
      {/* <Container>
        <Box my={2}>
          <div>{<img src="/images/background1.jpg" />}</div>
        </Box>
      </Container> */}
    </React.Fragment>
  );
}
