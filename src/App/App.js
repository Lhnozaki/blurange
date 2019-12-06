import React, { useState } from 'react';
import { withRouter } from "react-router";
import Routes from '../Routes';
import Header from '../Components/Header';
import LoginModal from '../Components/LoginModal';
import './App.scss';
import MobileNav from '../Components/MobileNav';
import { Redirect } from 'react-router-dom';

function App() {
  const [isAuth, setAuth] = useState(true);
  const [loginOn, setLoginOn] = useState(false);
  const [credentials, setCredentials] = useState({});
  const [showMenu, setMenu] = useState(false);

  return (
    <div className="App">
      <Header
        setAuth={setAuth}
        isAuth={isAuth}
        setLoginOn={setLoginOn}
        credentials={credentials}
        setMenu={setMenu}
        showMenu={showMenu}
      />
      <MobileNav showMenu={showMenu} />
      {loginOn &&
        <LoginModal
          setLoginOn={setLoginOn}
          setAuth={setAuth}
          credentials={credentials}
          setCredentials={setCredentials} />
      }
      <Routes />
      {/*isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/" />*/}
    </div>
  );
}

export default withRouter(App);

