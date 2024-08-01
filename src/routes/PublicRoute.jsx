import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/auth/slice';

const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuthenticated);

  return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
