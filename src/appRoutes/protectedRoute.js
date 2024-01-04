import { Navigate } from 'react-router-dom';

export function ProtectedRoute({ children }) {
 const token = localStorage.getItem('token');

 if (!token) {
  // Redireciona para a página de inicial se o usuário não estiver autenticado
  return <Navigate to="/" />;
 }

 // Se o usuário estiver autenticado, renderiza os filhos
 return children;
}