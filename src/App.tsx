import React from 'react';
import { Login } from './pages/Login';
import { Repository } from './pages/Repository';
import { SelfHosted } from './pages/SelfHosted';
import { useAuth } from './context/AuthContext';

function App() {
  const { isLoggedIn, loginType } = useAuth();

  if (!isLoggedIn) {
    return loginType === 'self-hosted' ? <SelfHosted /> : <Login />;
  }

  return <Repository />;
}

export default App;