import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  loginType: 'saas' | 'self-hosted' | null;
  user: User | null;
  login: (provider: string) => void;
  logout: () => void;
}

interface User {
  username: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginType, setLoginType] = useState<'saas' | 'self-hosted' | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const login = (provider: string) => {
    if (provider === 'saas' || provider === 'self-hosted') {
      setLoginType(provider);
      return;
    }

    // Simulate login
    setIsLoggedIn(true);
    setUser({
      username: 'UtkarshDhairyaPanwar',
      email: 'utkarsh@example.com'
    });
  };

  const logout = () => {
    setIsLoggedIn(false);
    setLoginType(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, loginType, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}