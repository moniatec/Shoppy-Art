import React from "react";
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
