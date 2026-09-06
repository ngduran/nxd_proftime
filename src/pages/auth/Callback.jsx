import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { storage } from '../../utils/storage';

const styles = {
  container: cn(
    "flex h-screen items-center justify-center",
    "bg-gray-50"
  ),
  message: cn(
    "text-lg font-medium text-gray-600",
    "animate-pulse"
  )
};

export function Callback() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');

    if (token) {
      storage.setToken(token);
      console.log('Token salvo com sucesso no localStorage!');
      navigate('/');
    } else {
      console.error("Erro na autenticação: parâmetro 'token' não encontrado na URL.");
    }
  }, [searchParams, navigate]);

  return (
    <div className={styles.container}>
      <p className={styles.message}>Processando autenticação...</p>
    </div>
  );
}