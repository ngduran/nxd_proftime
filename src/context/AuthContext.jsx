import { createContext, useContext, useState } from 'react';
import { storage } from '../utils/storage';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => storage.getToken());

  const login = (newToken) => {
    storage.setToken(newToken);
    setToken(newToken);
  };

  const logout = () => {
    storage.removeToken();
    setToken(null);
  };

  const isAuthenticated = !!token || !!storage.getToken();

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);