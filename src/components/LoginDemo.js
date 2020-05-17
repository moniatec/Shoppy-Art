import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginDemo } from "../store/authentication";
import Button from "@material-ui/core/Button";

const LoginDemo = (props) => {
  console.log(props);
  //   if (props.token) {
  //     return <Redirect to="/home" />;
  //   }
  return (
    <Button color="inherit" href="/home">
      Demo
    </Button>
  );
};

const mapStateToProps = (props) => {
  return {
    token: props.authentication.token,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginDemo: (props) => dispatch(loginDemo(props.authentication.token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginDemo);
