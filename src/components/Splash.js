import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Router, BrowserRouter } from "react-router-dom";
import SplashNavBar from "./SplashNavBar";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import SplashContainer from "./SplashContainer";

const Splash = (props) => {
  console.log(props);
  return (
    <>
      <CssBaseline />
      <Theme>
        <SplashNavBar />
        <SplashContainer {...props} />
      </Theme>
    </>
  );
};
export default Splash;
