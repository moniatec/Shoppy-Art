import React from "react";
import ReactDOM, { render } from "react-dom";
import { Router } from "react-router-dom";
import MainNavBar from "./MainNavBar";

const MainPage = () => {
  return (
    <Router>
      <MainNavBar />
    </Router>
  );
};

export default MainPage;
