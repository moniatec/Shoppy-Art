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
const { red } = require("@material-ui/core/colors");
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
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Link
              className={classes.title}
              color="inherit"
              href="https://github.com/moniatec/Shoppy-Art/pull/6"
            >
              About
            </Link>
            <Link
              className={classes.title}
              color="inherit"
              href="https://github.com/moniatec/Shoppy-Art/pull/6"
            >
              Contact
            </Link>
            <Button color="inherit" href="/signup">
              Sign Up
            </Button>
            <Button color="inherit" href="/login">
              Login
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Container>
        <Box my={2}>
          <div>{<img src="/images/background1.jpg" />}</div>
        </Box>
      </Container>
    </React.Fragment>
  );
}
