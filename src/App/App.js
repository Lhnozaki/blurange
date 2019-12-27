import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import Routes from "../Routes";
import Header from "../Components/Header";
import MobileNav from "../Components/MobileNav";
import "./App.scss";
import { StripeProvider, Elements } from "react-stripe-elements";

import { getGithubAccount } from "../actions";

function App({ state, ...props }) {
  const [isAuth, setAuth] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [showMenu, setMenu] = useState(false);

  useEffect(() => {
    props.getGithubAccount();
  }, []);

  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
      <Elements>
        <div className="App">
          <Header
            setAuth={setAuth}
            isAuth={isAuth}
            credentials={credentials}
            setCredentials={setCredentials}
            setMenu={setMenu}
            showMenu={showMenu}
          />
          <MobileNav showMenu={showMenu} isAuth={isAuth} />

          <Routes />
        </div>
      </Elements>
    </StripeProvider>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getGithubAccount: () => {
      dispatch(getGithubAccount());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(withRouter(App));
