import React, { useState } from 'react';
import { withRouter } from "react-router";
import Routes from '../Routes';
import Header from '../Components/Header';
import LoginModal from '../Components/LoginModal';
import './App.scss';

function App() {
  const [isAuth, setAuth] = useState(false);
  const [loginOn, setLoginOn] = useState(false);
  const [credentials, setCredentials] = useState({});

  return (
    <div className="App">
      <Header setAuth={setAuth} isAuth={isAuth} setLoginOn={setLoginOn} credentials={credentials} />
      {loginOn && <LoginModal setLoginOn={setLoginOn} setAuth={setAuth} credentials={credentials} setCredentials={setCredentials} />}
      <Routes />
    </div>
  );
}

export default withRouter(App);

