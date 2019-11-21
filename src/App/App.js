import React, { useState } from 'react';
import SplashPage from '../Components/SplashPage';
import Header from '../Components/Header';
import './App.scss';

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      <Header setAuth={setAuth} isAuth={isAuth} />
      {isAuth ? <h1>Authorized</h1> : <SplashPage />}
    </div>
  );
}

export default App;
