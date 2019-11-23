import React, { useState } from 'react';
import { withRouter } from "react-router";
import Routes from '../Routes';
import SplashPage from '../Components/SplashPage';
import Header from '../Components/Header';
import DesignSystem from '../Components/DesignSystem';
import './App.scss';

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      <Header setAuth={setAuth} isAuth={isAuth} />
      <Routes />
    </div>
  );
}

export default withRouter(App);

