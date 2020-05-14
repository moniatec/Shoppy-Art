import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Splash from "./components/Splash";
import LoginPage from "./components/LoginPage";
import RegistrationForm from "./components/RegistrationForm";
import { loadToken } from "./store/authentication";
import Home from "./components/Home";
import Products from "./components/Products";
// import Product from "./components/Product";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  async componentDidMount() {
    this.setState({ loaded: true });
    this.props.loadToken();
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={Splash} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegistrationForm} />
          <Route exact={true} path="/home" component={Home} />
          <Route exact={true} path="/products" component={Products} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadToken: () => dispatch(loadToken()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
