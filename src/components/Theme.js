import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  backgroundColor: "#6fb3c2",
  // fontFamily: "Verdana",
  // fontweith: "100",
  typography: {
    fontWeight: "fontWeightBold",
    fontFamily: "oblique",
  },
});
const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
