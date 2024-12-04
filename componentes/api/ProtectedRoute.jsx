import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; 

const ProtectedRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
  }

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
