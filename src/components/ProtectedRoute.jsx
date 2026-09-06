import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { storage } from '../utils/storage';

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const hasTokenInStorage = !!storage.getToken();

  if (!isAuthenticated && !hasTokenInStorage) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}