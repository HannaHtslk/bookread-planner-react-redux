import { useSelector } from 'react-redux';

import { Navigate } from 'react-router-dom';
import { selectIsAuthenticated } from '../redux/auth/slice';

const PrivateRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsAuthenticated);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
