import React from "react";
import { connect } from "react-redux";
import { loginDemo } from "../store/authentication";
import Button from "@material-ui/core/Button";

const LoginDemo = (props) => {
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
