import React, { Component } from "react";
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
