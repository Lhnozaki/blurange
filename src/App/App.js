import React, { useState } from 'react';
import { withRouter } from "react-router";
import Routes from '../Routes';
import Header from '../Components/Header';
import LoginModal from '../Components/LoginModal';
import './App.scss';
import { Redirect } from 'react-router-dom';


function App() {
  const [isAuth, setAuth] = useState(true);
  const [loginOn, setLoginOn] = useState(false);
  const [credentials, setCredentials] = useState({});

  return (
    <div className="App">
      <Header setAuth={setAuth} isAuth={isAuth} setLoginOn={setLoginOn} credentials={credentials} />
      {loginOn && <LoginModal isAuth={isAuth} setLoginOn={setLoginOn} setAuth={setAuth} credentials={credentials} setCredentials={setCredentials} />}
      <Routes />
      {isAuth ? <Redirect to="/dashboard" /> : <Redirect to="/" />}
    </div>
  );
}

export default withRouter(App);

