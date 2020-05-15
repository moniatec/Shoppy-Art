import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Router, BrowserRouter } from "react-router-dom";
import MainNavBar from "./MainNavBar";
import MainContainer from "./MainContainer";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";

const Home = (props) => {
  return (
    <>
      <CssBaseline />
      <Theme>
        <MainNavBar {...props} />
        <MainContainer />
      </Theme>
    </>
  );
};

export default Home;
