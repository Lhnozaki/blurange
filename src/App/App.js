import React, { useState } from 'react';
import SplashPage from '../Components/SplashPage';
import Header from '../Components/Header';
import DesignSystem from '../Components/DesignSystem';
import './App.scss';

function App() {
  const [isAuth, setAuth] = useState(true);

  return (
    <div className="App">
      <Header setAuth={setAuth} isAuth={isAuth} />
      {isAuth ? <DesignSystem /> : <SplashPage />}
    </div>
  );
}

export default App;
