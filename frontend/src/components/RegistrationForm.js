import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { register } from "../store/authentication";
import "./RegistrationForm.css";

class RegistrationFrom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      authentication: null,
      currentUserId: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    this.props.register(
      this.state.fullName,
      this.state.email,
      this.state.password
    );
  }

  updateFullName = (e) => {
    this.setState({ fullName: e.target.value });
  };

  updateEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  updatePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    if (this.props.token) {
      return <Redirect to="/" />;
    }
    return (
      <main className="centered middled">
        <div className="wrapper">
          <div className="form-wrapper">
            <h1>Create Account</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="fullName">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  value={this.state.fullName}
                  onChange={this.updateFullName}
                />
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.updateEmail}
                />
              </div>
              <div className="password">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  placeholder="Enter Passowrd"
                  value={this.state.password}
                  onChange={this.updatePassword}
                />
              </div>
              <div className="createAccount">
                <button type="submit">Create Account</button>
                <small>Already Have an Account?</small>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //token: state.authentication.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (fullName, email, password) =>
      dispatch(register(fullName, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationFrom);