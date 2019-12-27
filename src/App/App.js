import React, { useState } from "react";
import { withRouter } from "react-router";
import Routes from "../Routes";
import Header from "../Components/Header";
import LoginModal from "../Components/LoginModal";
import OAuthModal from "../Components/OAuthModal";
import MobileNav from "../Components/MobileNav";
import "./App.scss";
import { StripeProvider, Elements } from "react-stripe-elements";

function App() {
  const [isAuth, setAuth] = useState(false);
  const [loginOn, setLoginOn] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [showOAuth, setShowOAuth] = useState(false);
  const [showMenu, setMenu] = useState(false);

  function toggleLoginStatus() {
    if (isAuth) {
      setLoginOn(false);
      setAuth(false);
    } else {
      setLoginOn(true);
    }
  }

  return (
    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PK}>
      <Elements>
        <div className="App">
          <Header
            setAuth={setAuth}
            isAuth={isAuth}
            setLoginOn={setLoginOn}
            credentials={credentials}
            setMenu={setMenu}
            showMenu={showMenu}
            toggleLoginStatus={toggleLoginStatus}
          />
          {loginOn && (
            <LoginModal
              isAuth={isAuth}
              setLoginOn={setLoginOn}
              setAuth={setAuth}
              credentials={credentials}
              setCredentials={setCredentials}
              setShowOAuth={setShowOAuth}
            />
          )}
          {showOAuth && (
            <OAuthModal showOAuth={showOAuth} setShowOAuth={setShowOAuth} />
          )}
          <MobileNav
            showMenu={showMenu}
            isAuth={isAuth}
            toggleLoginStatus={toggleLoginStatus}
          />

          <Routes />
        </div>
      </Elements>
    </StripeProvider>
  );
}

export default withRouter(App);
