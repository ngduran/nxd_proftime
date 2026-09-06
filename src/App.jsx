import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProtectedRoute } from './components/ProtectedRoute';
import { Callback } from './pages/auth/Callback';

function Dashboard() {
  const { logout, token } = useAuth();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Módulo do Professor</h1>
      <p className="text-gray-600">Sua sessão está ativa!</p>
      <div className="rounded bg-gray-100 p-3 font-mono text-xs text-gray-700">
        Token atual: {token}
      </div>
      <button
        onClick={logout}
        className="rounded bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700"
      >
        Sair (Logout)
      </button>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/auth/callback',
    element: <Callback />,
  },
  {
    path: '/unauthorized',
    element: (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold text-red-600">Acesso Não Autorizado</h1>
        <p className="mt-2 text-gray-600">Faça login no Auctoritas para acessar o Proftime.</p>
      </div>
    ),
  },
]);

export default function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}