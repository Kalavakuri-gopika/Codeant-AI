import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext';
import { RepositoryProvider } from './context/RepositoryContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <RepositoryProvider>
        <App />
      </RepositoryProvider>
    </AuthProvider>
  </StrictMode>
);