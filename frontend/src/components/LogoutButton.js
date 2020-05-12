import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logout } from "../store/authentication";
import Button from "@material-ui/core/Button";

const LogoutButton = (props) =>
  props.loggedOut ? (
    <Redirect to="/login" />
  ) : (
    <div id="logout-button-holder">
      <Button color="inherit" onClick={props.logout}>
        Logout
      </Button>
    </div>
  );
const mapStateToProps = (state) => {
  return {
    loggedOut: !state.authentication.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
