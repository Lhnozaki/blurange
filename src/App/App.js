import React, { useState } from 'react';
import './App.scss';
import SplashPage from '../Components/SplashPage';
import Header from '../Components/Header';

function App() {
  const [isAuth, setAuth] = useState(false);

  return (
    <div className="App">
      <Header />
      {isAuth ? <h1>Authorized</h1> : <SplashPage />}
    </div>
  );
}

export default App;
