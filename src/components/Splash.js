import React from "react";

import SplashNavBar from "./SplashNavBar";
import { CssBaseline } from "@material-ui/core";
import Theme from "./Theme";
import SplashContainer from "./SplashContainer";

const Splash = (props) => {
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
