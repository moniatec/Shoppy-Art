import React, { Component } from "react";
import ReactDOM, { render } from "react-dom";
import { Router, BrowserRouter } from "react-router-dom";
import MainContainer from "./MainContainer";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";

class Home extends Component {
  render() {
    return (
      <>
        <CssBaseline />
        <Theme>
          <MainContainer />
        </Theme>
      </>
    );
  }
}
export default Home;
