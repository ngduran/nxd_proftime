import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Callback } from './pages/auth/Callback';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div className="p-8">
        <h1 className="text-2xl font-bold">Módulo do Professor</h1>
        <p className="mt-2 text-gray-600">Página inicial da aplicação.</p>
      </div>
    ),
  },
  {
    path: '/auth/callback',
    element: <Callback />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}