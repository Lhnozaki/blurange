import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import Routes from "../Routes";
import Header from "../Components/Header";
import LoginModal from "../Components/LoginModal";
import MobileNav from "../Components/MobileNav";
import "./App.scss";
import { Redirect } from "react-router-dom";
import { StripeProvider, Elements } from "react-stripe-elements";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [loginOn, setLoginOn] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [showMenu, setMenu] = useState(false);

  // function toggleLoginStatus() {
  //   if (isAuth) {
  //     setLoginOn(false);
  //     setAuth(false);
  //     console.log("logged out");
  //   } else {
  //     setLoginOn(true);
  //     console.log("logged in");
  //   }
  // }

  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
      <Elements>
        <div className="App">
          <Header
            setAuth={setAuth}
            isAuth={isAuth}
            setLoginOn={setLoginOn}
            credentials={credentials}
            setCredentials={setCredentials}
            setMenu={setMenu}
            showMenu={showMenu}
          />
          <MobileNav showMenu={showMenu} isAuth={isAuth} />

          <Routes />
          {/*isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/" />*/}
        </div>
      </Elements>
    </StripeProvider>
  );
}

export default withRouter(App);
