import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      login(token);
      navigate('/', { replace: true });
    } else {
      navigate('/unauthorized', { replace: true });
    }
  }, []);

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <p className="text-lg font-medium text-gray-600 animate-pulse">
        Processando autenticação...
      </p>
    </div>
  );
}